import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from "./About.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { FaDownload } from "react-icons/fa";

export default function About({ colorMode }) {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Box>
            <div id='About' style={{ height: "100px" }}></div>
            <Heading size={['2xl', '2xl', '2xl', '3xl']} textAlign='center' color={colorMode === 'light' ? "#1e5a68" : '#488A99'}>ABOUT</Heading>
            <div data-aos="flip-left">
                <Box id={style.aboutDiv} color={colorMode === 'light' ? "#1e5a68" : '#488A99'}>
                    <Image id={style.myImg} src={colorMode === 'light' ? './Images/KhalidImg.png' : './Images/KhalidImgBlue.png'} alt='khalid Img' />
                    <Box id={style.aboutDetails} >
                        <p className={style.name}>I am Khalid Shah</p>
                        <p className={style.name}>Full Stack Web Developer</p>
                        <p className={style.name}>I live in Bhusawal, Maharastra, India</p>
                        <p className={style.namep}>An independent and self-motivated graduate with proven and tested negotiation. To best utilize the
                            technical skills and soft skills by working in a challenging environment and intend to achieve respectably
                            position in the field of software engineering.</p>
                        <Box id={style.resumeDiv} backgroundColor={colorMode === 'light' ? "#1e5a68" : '#488A99'}>
                            <a id={style.resumeButton} href="./Khalid_Shah_Resume.pdf" download="Khalid Shah's Resume">Resume &nbsp;<FaDownload className={style.resumeDownloadLogo} /></a>
                        </Box>
                    </Box>
                </Box>
            </div>
        </Box>
    )
}
