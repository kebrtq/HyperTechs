# Email & WhatsApp Integration Setup Guide

This guide will help you set up email and WhatsApp notifications for your HyperTech checkout system.

## Overview

The system uses two trusted services:
- **Resend**: For sending emails
- **Twilio**: For sending WhatsApp messages

## Step 1: Set Up Resend (Email)

1. Go to https://resend.com and sign up (free tier available)
2. Click on "API Keys" in the dashboard
3. Copy your API key (starts with `re_`)
4. Add it to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```

**Email will be sent to:** `ibrahim.ahmedkeb1@gmail.com`

---

## Step 2: Set Up Twilio (WhatsApp)

### 2.1 Create Twilio Account
1. Go to https://www.twilio.com/try-twilio
2. Sign up for a free account (includes free trial credits)
3. Go to https://www.twilio.com/console
4. Copy your **Account SID** and **Auth Token**
5. Add to `.env.local`:
   ```
   TWILIO_ACCOUNT_SID=your_account_sid_here
   TWILIO_AUTH_TOKEN=your_auth_token_here
   ```

### 2.2 Set Up WhatsApp Sandbox (for testing)
1. In Twilio Console, go to **Messaging > Try it Out > Send an SMS**
2. Or navigate to **Messaging > Services > WhatsApp > Sandboxes**
3. Follow the setup wizard to enable WhatsApp sandbox
4. Send the code to activate your WhatsApp number
5. Get your sandbox phone number (usually like `+1xxx`) and add to `.env.local`:
   ```
   TWILIO_PHONE_NUMBER=+1234567890
   ```

### 2.3 For Production WhatsApp
- Purchase a dedicated WhatsApp Business number from Twilio
- Or use the WhatsApp Business API
- Update `TWILIO_PHONE_NUMBER` with your business number

**WhatsApp messages will be sent to:** `+9647768477953`

---

## Step 3: Test Your Setup

1. Update your `.env.local` with all the credentials
2. Restart your Next.js development server: `npm run dev`
3. Place a test order in the checkout
4. Check your email (ibrahim.ahmedkeb1@gmail.com) for confirmation
5. Check WhatsApp at +9647768477953 for the order message

---

## Troubleshooting

### Email not sending?
- Verify `RESEND_API_KEY` is correct
- Check browser console for errors
- Check server logs for error messages

### WhatsApp not sending?
- Verify `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` are correct
- Verify `TWILIO_PHONE_NUMBER` is your actual sandbox/business number
- Make sure WhatsApp sandbox is enabled
- Check that the recipient number (+9647768477953) is correct

---

## Current Configuration

The system will:
1. ✅ Send a formatted Arabic/English email to your Gmail
2. ✅ Send the full order message via WhatsApp
3. ✅ Include all customer details and order items
4. ✅ Log success/failure in server console

---

## Security Notes

- **Never commit `.env.local` to Git** - it contains sensitive API keys
- Keep your API keys private and rotate them regularly
- For production, use proper environment variable management
