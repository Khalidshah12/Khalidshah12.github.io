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
                    <Image src='Images/techno_turtles.png' alt='texhno_turtles image' />
                </Box>
                <Box className={style.major_project_detailsDiv} >
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']} >TECHNO TURTLES</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Techno Turtles is an e-learning platform where u can learn lessons, chat with instructor and build your career. Build this website with using nextjs and websocket with our own creative idea.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: NextJS | JavaScript | CSS | Chakra-UI</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://github.com/bArSu45/Techno_Turtles" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://techno-turtles-barsu45.vercel.app" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>

            <div data-aos="fade-up"
                id={style.minor_projectDivId}
                className={style.major_projectDiv}  >
                <Box className={style.major_project_detailsDiv} >
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']} >MINI NOTE APP (FULL STACK)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Notes is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: ReactJS | JavaScript | CSS | MongoDB | NodeJS | Express | Chakra-UI</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://github.com/Khalidshah12/mini_full_stack_app" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://myapp-ten-psi.vercel.app" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
                <Box className={style.major_project_imgDiv}>
                    <Image src='Images/noteapp.png' alt='noteapp image' />
                </Box>
            </div>

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
        </div>
    )
}
