import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VerifyEmail from '@/components/auth/VerifyEmail'

const page = () => {
  return (
    <>
        <Header  />
        <VerifyEmail/>
        <Footer />
    </>
  )
}

export default page