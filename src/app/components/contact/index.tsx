'use client'

import { useEffect, useState } from 'react'

const ContactForm = () => {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const clearForm = () => {
    setFormData({ name: '', email: '', message: '' })
  }

  const handleFormSubmit = async (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as string).toString(),
    })

    if (response.ok) {
      clearForm()
      setShowNotification(true)
      setNotificationMessage('Message submitted successfully')
    } else {
      setShowNotification(true)
      setNotificationMessage('Error sending message')
    }
  }

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  const renderNotification = () => {
    if (!showNotification) return null

    return (
      <div className='fixed bottom-6 right-6 z-50'>
        <div className='bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out animate-fade-in'>
          {notificationMessage}
        </div>
      </div>
    )
  }

  return (
    <div>
      {renderNotification()}
      <form
        name='contact'
        data-netlify='true'
        className='w-full max-w-lg mt-10 bg-black/60 rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-800'
        onSubmit={handleFormSubmit}
      >
        <input
          type='hidden'
          name='form-name'
          value='contact'
        />
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='name'
            className='text-gray-200 font-medium'
          >
            Name
          </label>
          <input
            id='name'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='email'
            className='text-gray-200 font-medium'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='message'
            className='text-gray-200 font-medium'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className='px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition resize-none'
          />
        </div>
        <button
          type='submit'
          className='mt-4 bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
