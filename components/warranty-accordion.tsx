"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function WarrantyAccordion() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-lg border bg-card p-4 text-sm text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-medium">شروط الضمان</h4>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="rounded-lg border border-t-0 bg-card p-4 text-sm" dir="rtl">
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
            <li>ضمان سنة استبدال أو إرجاع للمبلغ في حال عدم توفر المنتج من هايبرتك للحاسبات.</li>
            <li>الضمان لا يشمل سوء الاستخدام أو الأعطال الناتجة من التيار الكهربائي.</li>
            <li>لا يوجد استرجاع.</li>
          </ol>
        </div>
      )}
    </div>
  )
}
