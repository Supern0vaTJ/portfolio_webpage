import { assets } from '@/assets/assets'
import React, { useState, useRef } from 'react'
import Image from 'next/image'

function Contact() {
  const [result, setResult] = useState("");
  const formRef = useRef<HTMLFormElement>(null); // ✅ form reference

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    if (!formRef.current) return; // safeguard

    const formData = new FormData(formRef.current);
    formData.append("access_key", "0e77dc07-def0-4849-8207-77691c8838ab"); // Replace with real key
    formData.append("from_name", "Portfolio Website");
    formData.append("subject", "New Contact Form Submission");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      formRef.current.reset(); // ✅ clears inputs
    } else {
      console.log("Error", data);
      setResult("Error: " + data.message);
    }
  };

  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Would you like to interact or simply chat?</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

      <form ref={formRef} onSubmit={onSubmit} className="max-w-2xl text-center mx-auto mt-5 mb-12 font-Ovo">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input type="text" name="name" placeholder="Enter your name" required className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"/>
          <input type="email" name="email" placeholder="Enter your E-mail" required className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"/>
        </div>

        <textarea name="message" placeholder="Enter your message" required className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" rows={6}></textarea>

        <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer">
          Submit Now <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
      </form>

      <p className='mt-4'>{result}</p>
    </div>
  )
}

export default Contact;
