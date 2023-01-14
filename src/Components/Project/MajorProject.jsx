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
            <Heading w='90%' m='auto' size={['lg', 'lg', 'lg', '2xl']} fontWeight='500' textDecoration='underline'>Major Projects</Heading>

            <div data-aos="fade-up"
                className={style.major_projectDiv}
                id={style.major_projectDivId} >
                <Box className={style.major_project_detailsDiv}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>BATH & BODY WORKS(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Bath & Body Works, LLC. is an American retail store chain that sells soaps, lotions, fragrances, and candles.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: React | JavaScript | CSS | Redux | Chakra-UI | MongoDB | NodeJS | Express</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://github.com/Khalidshah12/somber-shape-4789" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://mybathnbody.vercel.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/bathnbody.png' alt='bath and body image' />
                </Box>
            </div>

            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/anthropologie.png' alt='anthropologie image' />
                </Box>
                <Box className={style.major_project_detailsDiv}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>ANTHROPOLOGIE(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Anthropologie is a unique, full-lifestyle shopping destination, with mostly exclusive assortment of clothing, shoes, accessories, beauty, furniture, home décor, garden, bridal, and more.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: ReactJS | JavaScript | CSS | Redux | Chakra-UI</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://github.com/Khalidshah12/anthropologie" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://myanthropology.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>

            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/lystImg.png' alt='lyst image' />
                </Box>
                <Box className={style.major_project_detailsDiv} >
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>LYST(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Lyst is a fashion technology company, and premium shopping app.It offer the most comprehensive range of products from 17,000 of the world’s leading brands and stores.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://github.com/Raj-Mandloii/lyst_project" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://62aec458d002661172622f35--delightful-biscochitos-b2f2b6.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>

        </div>
    )
}
