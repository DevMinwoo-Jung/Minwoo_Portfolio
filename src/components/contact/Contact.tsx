import React from 'react'
import {styled} from '@mui/system'
import Github from '../lottie/Github'
import Email from '../lottie/Email'
import Call from '../lottie/Call'

const Contact = () => {
    const ContactDiv = styled('div')({
        width: '100%',
        backgroundColor: 'white',
        display: 'block',
        margin: '2rem',
    })

    const copyText = (event: any) => {
        const target: string = String(event.target.parentElement.innerText)
        navigator.clipboard.writeText(target.substring(target.match(":")!.index! + 1, target.match(" ")!.index! - 4));
    }

    const IconsDiv = styled('div')({
        fontSize: '2.5rem',
        gap: '1rem',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center'
    })

    const IconPara = styled('h1')(({theme}) => ({
        fontSize: '4rem',
        lineHeight: '4rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
            marginRight: '1.5rem',
        },
    }));

    return (
        <ContactDiv>
            <IconsDiv>
                <Github/>
                <IconPara>
                    Github: <a href="https://github.com/DevMinwoo-Jung">Go to Github</a>
                </IconPara>
            </IconsDiv>
            <IconsDiv>
                <Email/>
                <IconPara >
                    Email:applejung312@gmail.com
                </IconPara>
                <button onClick={copyText}>asd</button>
            </IconsDiv>
            <IconsDiv>
                <Call/>
                <IconPara onClick={copyText}>
                    Phone:{`(82)010-8599-3012 `}
                </IconPara>
                <button onClick={copyText}>dddd</button>
            </IconsDiv>
        </ContactDiv>
    )
}

export default Contact