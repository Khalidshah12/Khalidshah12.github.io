import { Heading } from '@chakra-ui/react'
import React from 'react'
import MajorProject from './MajorProject'
import MiniProject from './MiniProject'
import style from './Project.module.css'

export default function Project() {
    return (
        <div>
            <div id='Projects' style={{ height: "100px" }}></div>
            <div id={style.projects}>
                <Heading size={['2xl', '2xl', '2xl', '3xl']} textAlign='center' color='#243D25'>PROJECTS</Heading>
                <MajorProject />
                <MiniProject />
            </div>
        </div>
    )
}
