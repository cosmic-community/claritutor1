import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

export async function POST(request: Request) {
  if (!openai) {
    return NextResponse.json(
      { error: 'OpenAI API key not configured' },
      { status: 500 }
    )
  }
  
  try {
    const { messages, subject } = await request.json()
    
    const systemPrompt = `You are Claritutor, an AI tutor specialized in ${subject || 'all subjects'}. 
    Provide clear, educational explanations that help students learn effectively. 
    Break down complex concepts into understandable parts.
    Use examples and analogies when helpful.
    Encourage critical thinking and understanding over memorization.`
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })
    
    return NextResponse.json({
      message: completion.choices[0].message
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}