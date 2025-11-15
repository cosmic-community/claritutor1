import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper functions for auth
export async function signUp(email: string, password: string) {
  if (!supabase) throw new Error('Supabase not configured')
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  if (error) throw error
  return data
}

export async function signIn(email: string, password: string) {
  if (!supabase) throw new Error('Supabase not configured')
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) throw error
  return data
}

export async function signOut() {
  if (!supabase) throw new Error('Supabase not configured')
  
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getCurrentUser() {
  if (!supabase) return null
  
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Profile management
export async function createOrUpdateProfile(userId: string, data: any) {
  if (!supabase) throw new Error('Supabase not configured')
  
  const { error } = await supabase
    .from('profiles')
    .upsert({
      id: userId,
      ...data,
      updated_at: new Date().toISOString(),
    })
  
  if (error) throw error
}

// Conversation management
export async function saveConversation(userId: string, conversation: any) {
  if (!supabase) throw new Error('Supabase not configured')
  
  const { data, error } = await supabase
    .from('conversations')
    .insert({
      user_id: userId,
      ...conversation,
    })
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function getConversations(userId: string) {
  if (!supabase) throw new Error('Supabase not configured')
  
  const { data, error } = await supabase
    .from('conversations')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data || []
}

// Study session management
export async function saveStudySession(userId: string, duration: number) {
  if (!supabase) throw new Error('Supabase not configured')
  
  const { data, error } = await supabase
    .from('study_sessions')
    .insert({
      user_id: userId,
      duration,
      completed: true,
    })
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function getStudySessions(userId: string) {
  if (!supabase) throw new Error('Supabase not configured')
  
  const { data, error } = await supabase
    .from('study_sessions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data || []
}