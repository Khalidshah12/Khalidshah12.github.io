import { Box, Heading, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from "./Contact.module.css"
import emailjs from "emailjs-com"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
export default function Contact({ colorMode }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const SendMail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_43cu20v',
            'template_3jz6tjn',
            e.target,
            '5oyqGqg7y027m0IG2')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    return (
        <Box id='Contact'>
            <div style={{ height: "100px" }}></div>
            <Heading size={['2xl', '2xl', '2xl', '3xl']} textAlign='center' fontWeight='500' color='#ab3a8b' mb='30px'>CONTACT ME</Heading>
            <Box id={style.contact_mainDiv}>
                <Box id={style.contact_leftDiv}>
                    <Box>
                        <form action="" onSubmit={SendMail}>
                            <Heading id={style.contact_head}>YOUR NAME (required)</Heading>
                            <input className={style.input} placeholder='Enter your Name' name="name"
                                value={name} onChange={(e) => setName(e.target.value)}
                            />

                            <Heading id={style.contact_head}>YOUR EMAIL (required)</Heading>
                            <input className={style.input} placeholder='Enter your Email' name="user_email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />

                            <Heading id={style.contact_head}>SUBJECT</Heading>
                            <input className={style.input} placeholder='Enter your Subject' name="subject"
                                value={subject} onChange={(e) => setSubject(e.target.value)}
                            />

                            <Heading id={style.contact_head}>YOUR MESSAGE</Heading>
                            <input className={style.input1} placeholder='Enter your Message' name="message"
                                value={message} onChange={(e) => setMessage(e.target.value)}
                            />
                            <br />
                            <input id={style.btn} type="submit" value='Send' />
                        </form>
                    </Box>
                </Box>
                <Box id={style.contact_rightDiv}>
                    <Box>
                        <Heading id={style.contact_head1}>E-Mail</Heading>
                        <p style={{ color: '#ab3a8b' }}>shah.khalidshah75@gmail.com</p>
                        <div className={style.line}></div>
                        <Heading id={style.contact_head1}>Phone</Heading>
                        <p style={{ color: '#ab3a8b' }}>+91 7507073067</p>
                        <div className={style.line}></div>
                        <Heading id={style.contact_head1}>On The Web</Heading>
                        <Box id={style.footer_aDiv}>
                            <a href='https://github.com/Khalidshah12' target='_blank' rel="noreferrer"><FaGithub color='#4078c0' /> </a>
                            <a href='https://www.linkedin.com/in/khalid-shah-0a6404231/' target='_blank' rel="noreferrer"><FaLinkedin color='#0A66C2' /></a>
                            <a href='https://www.instagram.com/mr__shah__02/' target='_blank' rel="noreferrer"> <FaInstagram color='#cd486b' /></a>
                            <a href='https://www.instagram.com/mr__shah__02/' target='_blank' rel="noreferrer"><FaFacebook color='#3b5998' /></a>
                            <a href='https://twitter.com/Mr_shah_02' target='_blank' rel="noreferrer"><FaTwitter color='#00acee' /></a>
                        </Box>
                        <div className={style.line}></div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
