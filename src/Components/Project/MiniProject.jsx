import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from './Project.module.css'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"

export default function MiniProject() {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div id={style.majorMain}>
            <Heading size='2xl' color='#243D25' textDecoration='underline'>Minor Projects</Heading>
            <div data-aos="fade-right"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='https://clinquant-lily-6a6bb2.netlify.app/5.png' alt='barsu' />
                </Box>
                <Box className={style.major_project_detailsDiv}>
                    <Heading className={style.major_project_detailsDiv_Heading}>YOUTUBE(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} size='md'>YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. </Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size='lg'>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button><a rel="noreferrer" href="https://github.com/Khalidshah12/my-youtube" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button><a rel="noreferrer" href="https://selfyoutube.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>

            <div data-aos="fade-left"
                id={style.minor_projectDivId}
                className={style.major_projectDiv}  >
                <Box className={style.major_project_detailsDiv}>
                    <Heading className={style.major_project_detailsDiv_Heading}>HOTSTAR(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} size='md'>Hotstar for a streaming service carrying content from Disney Star's local networks, including films, television series, live sports, and original programming.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size='lg'>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button><a rel="noreferrer" href="https://github.com/Khalidshah12/myhotstar" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button><a rel="noreferrer" href="https://myhotstar.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
                <Box className={style.major_project_imgDiv}>
                    <Image src='https://clinquant-lily-6a6bb2.netlify.app/4.png' alt='barsu' />
                </Box>
            </div>

            <div data-aos="fade-right"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='https://sunny-travesseiro-51b751.netlify.app/8.png' alt='barsu' />
                </Box>
                <Box className={style.major_project_detailsDiv}>
                    <Heading className={style.major_project_detailsDiv_Heading}>WEATHER APP</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} size='md'>Weather forecasting is the application of science and technology to predict the conditions of the atmosphere for a given location and time.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size='lg'>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button><a rel="noreferrer" href="https://github.com/Khalidshah12/myweatherapp" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button><a rel="noreferrer" href="https://myweatherlocation.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
