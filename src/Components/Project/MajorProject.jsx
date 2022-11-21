import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from './Project.module.css'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"

export default function MajorProject({ colorMode }) {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div id={style.majorMain}>
            <Heading size={['lg', 'lg', 'lg', '2xl']} color={colorMode === 'light' ? "#243D25" : '#488A99'} textDecoration='underline'>Major Projects</Heading>
            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/lystImg.png' alt='lyst image' />
                </Box>
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#243D25" : '#488A99'} >
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>LYST(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Lyst is a fashion technology company, and premium shopping app.It offer the most comprehensive range of products from 17,000 of the world’s leading brands and stores.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://github.com/Raj-Mandloii/lyst_project" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://62aec458d002661172622f35--delightful-biscochitos-b2f2b6.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>

            <div data-aos="fade-up"
                className={style.major_projectDiv}
                id={style.major_projectDivId} >
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#243D25" : '#488A99'}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>BIG-BASKET(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>The best online grocery store in India. bigbasket is an online supermarket for all your daily needs. Online shopping now made easy.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://github.com/rameshmunda8877/Unit2-ConstructWeek-GroupProject" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://mybigbasket.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/bigbasketImg.png' alt='big basket image' />
                </Box>
            </div>

            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/anthropologie.png' alt='anthropologie image' />
                </Box>
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#243D25" : '#488A99'}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>ANTHROPOLOGIE(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Anthropologie is a unique, full-lifestyle shopping destination, with mostly exclusive assortment of clothing, shoes, accessories, beauty, furniture, home décor, garden, bridal, and more.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript | React</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://github.com/Khalidshah12/anthropologie" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://anthropologie-vert.vercel.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
