import React from 'react'
import {styled} from '@mui/system'
import Github from '../lottie/Github'
import Email from '../lottie/Email'
import Call from '../lottie/Call'

const Contact = () => {
    const ContactDiv = styled('div')({
        width: '100%',
        display: 'block',
        margin: '2rem',
    })
    
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
                <Github/>
                <IconPara>
                    Github: https://github.com/DevMinwoo-Jung   
                </IconPara>
            </IconsDiv>
            <IconsDiv>
                <Email/>
                <IconPara >
                    Email: applejung312@gmail.com
                </IconPara>
            </IconsDiv>
            <IconsDiv>
                <Call/>
                <IconPara>
                    Phone: {`(82)010-8599-3012 `}
                </IconPara>
            </IconsDiv>
        </ContactDiv>
    )
}

export default Contact