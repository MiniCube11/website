'use server'

import { createClient } from '@supabase/supabase-js'

type MailingListResult = { error?: string; success?: string }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribeToMailingList(
  formData: FormData,
): Promise<MailingListResult> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim().toLowerCase()

  if (!name || name.length > 100) {
    return { error: 'Please enter your preferred name.' }
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return { error: 'Please enter a valid email address.' }
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return { error: 'Something went wrong. Please try again.' }
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { error } = await supabase
    .from('mailing_list')
    .upsert({ name, email }, { onConflict: 'email', ignoreDuplicates: true })

  if (error) {
    return { error: 'Something went wrong. Please try again.' }
  }

  return { success: "You've been added to the list!" }
}
