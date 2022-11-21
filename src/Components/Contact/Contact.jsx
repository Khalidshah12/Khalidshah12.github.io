import { Box, Heading, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from "./Contact.module.css"
import emailjs from "emailjs-com"
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
            <Heading size={['2xl', '2xl', '2xl', '3xl']} textAlign='center' color={colorMode === 'light' ? "#243D25" : '#488A99'} mb='30px'>CONTACT ME</Heading>
            <Box id={style.contact_mainDiv} backgroundColor={colorMode === 'light' ? "#889E81" : '#1a6373'}>
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
                            <input className={style.input1} placeholder='Enter you Message' name="message"
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
                        <p style={{ color: '#DAE2B6' }}>shah.khalidshah75@gmail.com</p>
                        <div className={style.line}></div>
                        <Heading id={style.contact_head1}>Phone</Heading>
                        <p style={{ color: '#DAE2B6' }}>+91 7507073067</p>
                        <div className={style.line}></div>
                        <Heading id={style.contact_head1}>On The Web</Heading>
                        <Box>
                            <Link style={{ color: '#DAE2B6', textDecoration: 'none' }} href='https://www.linkedin.com/in/khalid-shah-0a6404231/' isExternal>LinkedIn | </Link>
                            <Link style={{ color: '#DAE2B6', textDecoration: 'none' }} href='https://twitter.com/Mr_shah_02' isExternal>Twitter | </Link>
                            <Link style={{ color: '#DAE2B6', textDecoration: 'none' }} href='https://github.com/Khalidshah12' isExternal>Github</Link>
                        </Box>
                        <div className={style.line}></div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
