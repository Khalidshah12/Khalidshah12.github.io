import { Flex, VStack, Image, Box, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import style from "./Home.module.css"

export default function Home({ colorMode }) {

    const [isSmallScreen] = useMediaQuery('(min-width: 680px)')
    const [isMediumScreen] = useMediaQuery('(min-width: 1180px)')

    return (
        <div>
            <VStack id={style.home}>
                <Flex alignItems={isMediumScreen ? "end" : "start"} flexDirection={isSmallScreen ? "row" : "column-reverse"} >
                    <Box id={style.myDetailsDiv} >
                        <Box id={style.resumeHomeDiv} display='flex' justifyContent='space-between' alignItems='end' w='80%' mb='30px'>
                            <Box>
                                <Heading id={style.myName}><span>Hey,</span><br />This is Khalid Shah</Heading>
                                <Heading id={style.title} fontWeight='600'>Full Stack Web Developer</Heading>
                            </Box>
                            <Box id={style.resumeDiv} >
                                <a id={style.resumeButton} href="./Khalid_Shah_Resume.pdf" download="Khalid-Shah-Resume">Resume &nbsp;<FaDownload className={style.resumeDownloadLogo} /></a>
                            </Box>
                        </Box>
                        <Heading id={style.detail} fontWeight='500'>An independent and self-motivated graduate with proven and tested negotiation. To best utilize the
                            technical skills and soft skills by working in a challenging environment and intend to achieve respectably
                            position in the field of software engineering.</Heading>
                        <Box id={style.resumeDivSmall} >
                            <a id={style.resumeButton} href="./Khalid_Shah_Resume.pdf" download="Khalid-Shah-Resume">Resume &nbsp;<FaDownload className={style.resumeDownloadLogo} /></a>
                        </Box>
                    </Box>
                    <Image id={style.myImg} src={colorMode === 'light' ? './Images/KhalidImg.png' : './Images/KhalidImgBlue.png'} alt='khalid Img' />
                </Flex>
            </VStack>
        </div>
    )
}
