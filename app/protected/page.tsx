'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Home() {
    const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/login?callbackUrl=/')
    },
    })

    if(status === 'loading') {
       return (
        <div className='container'>
          <h3>Loading...</h3>
        </div>
       )
    }
  return (
    <section className='py-24 min-h-screen bg-stone-50'>
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold font-mono text-gray-900'>Order Home</h1>
        </div>
    </section>
  )
}
