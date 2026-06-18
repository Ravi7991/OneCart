import React from 'react'
import Title from '../component/Title'

function PrivacyPolicy() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[30px] pt-[80px] px-[20px] text-white'>
      <Title text1={'PRIVACY'} text2={'POLICY'} />
      <div className='w-full max-w-4xl rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-10 space-y-5 text-[14px] md:text-[16px] leading-7'>
        <p>
          OneCart respects your privacy and is committed to protecting the personal information you share with us while using our store.
        </p>
        <p>
          We use your details to process orders, improve your shopping experience, provide customer support, and keep your account secure.
        </p>
        <p>
          We do not sell your personal information. Any third-party services we use, such as payment or delivery partners, only receive the data needed to complete your request.
        </p>
        <p>
          If you have questions about how your information is handled, please contact our support team at contact@onecart.com.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
