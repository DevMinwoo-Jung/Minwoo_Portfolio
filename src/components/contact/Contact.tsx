import React from 'react'
import {styled} from '@mui/system'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { SiBloglovin } from 'react-icons/si'

const Contact = () => {
    const ContactDiv = styled('div')(({theme}) => ({
        width: '100%',
        display: 'block',
        margin: '2rem',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
    }));
    
    const IconsDiv = styled('div')({
        fontSize: '2.5rem',
        gap: '1rem',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center'
    })

    const IconPara = styled('h1')(({theme}) => ({
        fontSize: '3rem',
        lineHeight: '3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            marginRight: '1rem',
        },
    }));

    const SectionHeader = styled('h1')(({theme}) => ({
        textAlign: 'center',
        [theme.breakpoints.up('xl')]: {
            fontSize: '7rem',
        },
        [theme.breakpoints.down('xl')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
    }))

    return (
        <ContactDiv>
            <SectionHeader>Contact</SectionHeader>
            <IconsDiv>
                <AiFillGithub/>
                <IconPara>
                    Github: https://github.com/DevMinwoo-Jung   
                </IconPara>
            </IconsDiv>
            <IconsDiv>
                <HiOutlineMail/>
                <IconPara >
                    Email: applejung312@gmail.com
                </IconPara>
            </IconsDiv>
            <IconsDiv>
                <BsPhone/>
                <IconPara>
                    Phone: {`(82)010-8599-3012 `}
                </IconPara>
            </IconsDiv>
            <IconsDiv>
                <SiBloglovin/>
                <IconPara>
                    https://velog.io/@lastya
                </IconPara>
            </IconsDiv>
        </ContactDiv>
    )
}

export default Contact