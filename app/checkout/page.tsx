"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"
import { CartItem } from "@/lib/types"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState<string>("")
  const [completedItems, setCompletedItems] = useState<CartItem[]>([])

  const [formData, setFormData] = useState({
    name: "",
    governorate: "",
    address: "",
    phone: "",
    phone2: "",
    notes: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const shipping = 5000

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "هذا الحقل مطلوب"
    if (!formData.governorate.trim()) newErrors.governorate = "هذا الحقل مطلوب"
    if (!formData.address.trim()) newErrors.address = "هذا الحقل مطلوب"
    if (!formData.phone.trim()) {
      newErrors.phone = "هذا الحقل مطلوب"
    } else if (!/^07\d{9}$/.test(formData.phone)) {
      newErrors.phone = "يرجى إدخال رقم هاتف صحيح يبدأ بـ 07"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const message = `*طلب جديد من HyperTech*\n\n*الاسم:* ${formData.name}\n*المحافظة:* ${formData.governorate}\n*العنوان / التفاصيل:* ${formData.address}\n*الهاتف:* ${formData.phone}${formData.phone2 ? `\n*هاتف إضافي:* ${formData.phone2}` : ""}${formData.notes ? `\n*ملاحظات الطلب:* ${formData.notes}` : ""}\n\n*طريقة الدفع:* الدفع نقدًا عند الاستلام\n\n*تفاصيل الطلب:*\n${items.map(item => `- ${item.product.name} x${item.quantity} = ${(item.product.price * item.quantity).toLocaleString()} IQD`).join("\n")}\n\n*الشحن:* ${shipping.toLocaleString()} IQD\n*الإجمالي:* ${(subtotal + shipping).toLocaleString()} IQD`

      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderData: {
            customerName: formData.name,
            message,
          },
        }),
      })

      let result
      const text = await response.text()

      try {
        result = JSON.parse(text)
      } catch (parseError) {
        console.error('API response is not JSON:', text)
        throw new Error('Invalid API response')
      }

      if (result.success) {
        setOrderId(result.orderId || `ORD-${Date.now()}`)
        setCompletedItems(items)
        setOrderComplete(true)
        clearCart()
      } else {
        alert('حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (orderComplete) {
    return (
      <div dir="rtl" className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">تم استلام الطلب!</h1>
            <p className="text-gray-600">رقم الطلب: {orderId}</p>
          </div>

          <Card className="text-right">
            <CardHeader>
              <CardTitle>تفاصيل الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-right">
                <div className="flex justify-between">
                  <span className="font-medium">الاسم:</span>
                  <span>{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">المحافظة:</span>
                  <span>{formData.governorate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">العنوان:</span>
                  <span>{formData.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">الهاتف:</span>
                  <span>{formData.phone}</span>
                </div>
                {formData.phone2 && (
                  <div className="flex justify-between">
                    <span className="font-medium">هاتف إضافي:</span>
                    <span>{formData.phone2}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-medium">طريقة الدفع:</span>
                  <span>الدفع نقدًا عند الاستلام</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">ملخص الطلب:</h3>
                <div className="space-y-1 text-right">
                  {completedItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span>{item.product.name} x{item.quantity}</span>
                      <span>{(item.product.price * item.quantity).toLocaleString()} IQD</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm">
                    <span>الشحن</span>
                    <span>{shipping.toLocaleString()} IQD</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>الإجمالي</span>
                    <span>{(subtotal + shipping).toLocaleString()} IQD</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="text-blue-800 text-sm">
                  تم استلام طلبك بنجاح وسيتم التواصل معك قريبًا.
                  <br />
                  يرجى التأكد من صحة بيانات الاتصال.
                  <br />
                  التوصيل خلال 2-3 أيام عمل.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Link href="/">
              <Button>العودة للمتجر</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div dir="rtl" className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">السلة فارغة</h1>
          <p className="text-muted-foreground mb-6">لم يتم إضافة أي منتجات بعد.</p>
          <Link href="/">
            <Button>العودة للمتجر</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div dir="rtl" className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">إتمام الطلب</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>بيانات العميل</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="اكتب اسمك الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="governorate">المحافظة *</Label>
                  <Input
                    id="governorate"
                    name="governorate"
                    placeholder="اكتب اسم المحافظة"
                    value={formData.governorate}
                    onChange={(e) => setFormData(prev => ({ ...prev, governorate: e.target.value }))}
                    className={errors.governorate ? "border-red-500" : ""}
                  />
                  {errors.governorate && <p className="text-red-500 text-sm">{errors.governorate}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">العنوان / التفاصيل *</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="اكتب عنوان التوصيل بالتفصيل"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className={errors.address ? "border-red-500" : ""}
                  />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">الهاتف *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="مثال: 07701234567"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone2">هاتف إضافي (اختياري)</Label>
                  <Input
                    id="phone2"
                    name="phone2"
                    placeholder="رقم هاتف إضافي إذا توفر"
                    value={formData.phone2}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone2: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">ملاحظات الطلب (اختياري)</Label>
                  <Input
                    id="notes"
                    name="notes"
                    placeholder="اكتب أي ملاحظات إضافية"
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  />
                </div>

                <div className="space-y-3">
                  <Label>طريقة الدفع</Label>
                  <Input
                    value="الدفع نقدًا عند الاستلام"
                    readOnly
                    className="bg-green-50 border-green-300 text-green-800"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "جاري إرسال الطلب..." : "إتمام الطلب"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>ملخص الطلب</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center py-2">
                    <span className="flex-1">{item.product.name}</span>
                    <span className="invisible px-4">spacer</span>
                    <span className="text-left">{(item.product.price * item.quantity).toLocaleString()} IQD</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span>الشحن</span>
                  <span className="invisible px-4">spacer</span>
                  <span>{shipping.toLocaleString()} IQD</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg pt-2 border-t">
                  <span>الإجمالي</span>
                  <span className="invisible px-4">spacer</span>
                  <span>{(subtotal + shipping).toLocaleString()} IQD</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
