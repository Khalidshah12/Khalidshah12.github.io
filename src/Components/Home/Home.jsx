import { Flex, VStack, Image, Box, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import style from "./Home.module.css"


export default function Home() {

    const [isSmallScreen] = useMediaQuery('(min-width: 680px)')
    const [isMediumScreen] = useMediaQuery('(min-width: 1180px)')

    return (
        <div>
            <VStack id={style.home} >
                <Flex alignItems={isMediumScreen ? "end" : "start"} flexDirection={isSmallScreen ? "row" : "column"} >
                    <Image id={style.myImg} src='KhalidImg.jpeg' alt='khalid Img' />
                    <Box id={style.myDetailsDiv} >
                        {/* <Box w='100%' display="flex" justifyContent="end">
                        </Box> */}
                        <Heading id={style.myName}><span>Hey,</span><br /> I am Khalid Shah</Heading>
                        <Heading id={style.title}>Full Stack Web Developer</Heading>
                        <Heading id={style.detail}>I am passionate about enhancing user experience and maximizing user interface. I can quickly create websites using Chakra UI & Bootstrap, but I can also create websites with native coding. Strong creative and analytical skills. </Heading>
                    </Box>
                </Flex>
            </VStack>
        </div>
    )
}
