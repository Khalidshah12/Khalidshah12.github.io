import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaGofore, FaPhoneAlt } from 'react-icons/fa'
import style from './Footer.module.css'
export default function Footer() {
    return (
        <Box id={style.footer_mainDiv}>
            <Box id={style.footer_mainDiv1}>
                <Heading id={style.footer_head}>Get In Touch</Heading>
                <Heading id={style.footer_head1}>You can reach out to me at</Heading>
                <Box display='flex' justifyContent='center' alignItems='center' marginTop='20px'>
                    <FaGofore />
                    &nbsp; <p>shah.khalidshah75@gmail.com</p>
                </Box>

                <Box display='flex' justifyContent='center' alignItems='center' marginTop='20px'>
                    <FaPhoneAlt />
                    &nbsp; <p>+91 7507073067</p>
                </Box>
            </Box>
            <Box id={style.footer_mainDiv2}>
                <Box id={style.footer_aDiv}>
                    <a href='https://twitter.com/Mr_shah_02' target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a href='https://www.instagram.com/mr__shah__02/' target='_blank' rel="noreferrer"> <FaInstagram /></a>
                    <a href='https://www.instagram.com/mr__shah__02/' target='_blank' rel="noreferrer"><FaFacebook /></a>
                    <a href='https://www.linkedin.com/in/khalid-shah-0a6404231/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a href='https://github.com/Khalidshah12' target='_blank' rel="noreferrer"><FaGithub /> </a>
                </Box>
            </Box>
            <Box id={style.footer_mainDiv3}><p>Created By Khalid Shah | © 2022. All Rights Reserved</p></Box>
        </Box>
    )
}
