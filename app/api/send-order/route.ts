import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { orderData } = await request.json()

    console.log('New Order Received:', orderData)

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'ibrahim.ahmedkeb1@gmail.com',
          subject: 'طلب جديد - New Order from HyperTech',
          html: `
            <div dir="rtl" style="font-family: Arial, sans-serif; color: #333;">
              <h2>طلب جديد من HyperTech</h2>
              <p><strong>اسم العميل:</strong> ${orderData.customerName}</p>
              <hr style="border: 1px solid #ddd;" />
              <h3>تفاصيل الطلب:</h3>
              <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
${orderData.message}
              </pre>
            </div>
          `
        })
        console.log('Email sent successfully to ibrahim.ahmedkeb1@gmail.com')
      } catch (emailError) {
        console.error('Error sending email:', emailError)
      }
    } else {
      console.warn('Resend API key is not configured; skipping email send.')
    }

    // Send WhatsApp message via Twilio if configured
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
      try {
        const { default: twilio } = await import('twilio')
        const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

        await twilioClient.messages.create({
          body: orderData.message,
          from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
          to: `whatsapp:+9647768477953`
        })
        console.log('WhatsApp message sent successfully')
      } catch (whatsappError) {
        console.error('Error sending WhatsApp message:', whatsappError)
      }
    } else {
      console.warn('Twilio credentials are not configured; skipping WhatsApp send.')
    }

    return NextResponse.json({
      success: true,
      message: 'Order processed successfully',
      orderId: `ORD-${Date.now()}`
    })

  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to process order'
    }, { status: 500 })
  }
}