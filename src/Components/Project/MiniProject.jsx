import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from './Project.module.css'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"

export default function MiniProject({ colorMode }) {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div id={style.majorMain}>
            <Heading size={['lg', 'lg', 'lg', '2xl']} fontWeight='500' textDecoration='underline'>Minor Projects</Heading>
            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/youtubeImg.png' alt='youtube image' />
                </Box>
                <Box className={style.major_project_detailsDiv} >
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']} >YOUTUBE(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. </Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://github.com/Khalidshah12/my-youtube" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://selfyoutube.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>

            <div data-aos="fade-up"
                id={style.minor_projectDivId}
                className={style.major_projectDiv}  >
                <Box className={style.major_project_detailsDiv} >
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']} >HOTSTAR(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Hotstar for a streaming service carrying content from Disney Star's local networks, including films, television series, live sports, and original programming.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://github.com/Khalidshah12/myhotstar" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://myhotstar.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/hotstarImg.png' alt='hotstar image' />
                </Box>
            </div>

            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/weatherImg.png' alt='weather image' />
                </Box>
                <Box className={style.major_project_detailsDiv} >
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']} >WEATHER APP</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Weather forecasting is the application of science and technology to predict the conditions of the atmosphere for a given location and time.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://github.com/Khalidshah12/myweatherapp" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://myweatherlocation.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
