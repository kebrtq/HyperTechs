export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Warranty Information</h1>

        <div className="max-w-3xl mx-auto bg-card rounded-lg border p-8" dir="rtl">
          <h2 className="text-2xl font-semibold mb-6">شروط الضمان</h2>

          <ol className="space-y-4 text-lg text-muted-foreground list-decimal list-inside">
            <li>
              ضمان سنة استبدال أو إرجاع للمبلغ في حال عدم توفر المنتج من هايبرتك للحاسبات.
            </li>
            <li>
              الضمان لا يشمل سوء الاستخدام أو الأعطال الناتجة من التيار الكهربائي.
            </li>
            <li>
              لا يوجد استرجاع.
            </li>
          </ol>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              للمزيد من المعلومات، يرجى التواصل معنا عبر:
            </p>
            <p className="text-sm mt-2">
              <strong>WhatsApp:</strong> 0776 847 7953
            </p>
            <p className="text-sm">
              <strong>Telegram:</strong> 0776 847 7953
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
