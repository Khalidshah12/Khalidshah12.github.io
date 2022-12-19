import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import style from './Footer.module.css'
export default function Footer({ colorMode }) {
    return (
        <Box id={style.footer_mainDiv}>
            <Box id={style.footer_mainDiv3} backgroundColor={colorMode === 'light' ? "#1e5a68" : '#1a6373'}><p>Created By Khalid Shah | © 2022. All Rights Reserved</p></Box>
        </Box>
    )
}
