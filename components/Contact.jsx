/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import { useState, useRef } from 'react'
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Input from './Input';

const Contact = () => {
    const formRef = useRef(null);

    const sendEmail = (e) => {
        console.log(sendEmail)
        e.preventDefault();

        if (!formRef.current) return; // Ensures the form is mounted

        const fieldNames = ["firstname", "email", "message"];

        const validateFieldNames = fieldNames.every(fieldName => {
            const field = formRef.current?.elements.namedItem(fieldName);
            if (!field) return false;
            const fieldValue = field.value.trim();
            return fieldValue !== "";
        });


        const emailField = formRef.current?.elements.namedItem("email");
        const emailValue = emailField?.value.trim();

        if (emailValue && !emailValue.includes("@")) {
            toast.error("Please enter a valid email address!");
            return;
        } else if (!validateFieldNames) {
            toast.error("Please fill in all the fields!");
            return;
        }



        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formRef.current, {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        })
            .then(() => {
                toast.success("Message sent successfully!");
                formRef.current?.reset();
            }, (error) => { // Provide the expected type for the error parameter
                toast.error("An error occurred, please try again later!");
                console.error("Error sending email: ", error);
            });
    }

    return (
        <form onSubmit={sendEmail} ref={formRef} className='w-full lg:w-[50%] h-[850px] flex flex-col gap-20 font-Monda items-center justify-center'>
            <Input placeholder='Enter your firstname' name="firstname" label='Full Name' type='text' />
            <Input placeholder='Enter your email address' name="email" label='Email' type='email' />
            <div className='flex flex-col gap-2'>
                <label htmlFor="message" className='text-white font-Monda text-xl xs:text-2xl md:cursor-none md:HoverCursor ml-2'>Message</label>
                <textarea name="message" id="message" placeholder='Enter your message...' className='w-[300px] xs2:w-[500px] h-[215px] rounded-md border-[1px] border-[#ffffff] bg-[rgba(7,7,7,0.2)] xs:cursor md:cursor-none md:HoverCursor pl-4 pt-3 text-white text-[16px] xs:text-[20px] placeholder:text-[rgba(255,255,255,0.20)] focus:border-theme-blue outline-none'></textarea>
            </div>
            <button type='submit' className='w-[280px] h-[70px] rounded-[16px] border-[2px] border-[#272727] bg-[rgba(21,21,21,0.40)] HoverCursor hover:bg-[rgba(34,34,34,0.4)] hover:scale-[1.02] transition-all duration-300'>Send Message</button>
        </form>
    )
}

export default Contact