import { styled } from '@mui/system';
import React from 'react'
import MainImage from '../lottie/MainImage'

const Main = () => {
    const MainStyle = styled('div')({
        width: '100%',
        marginTop: '70px'
    })

    const MainIntro = styled('h1')({
        fontSize: '8rem',
        margin: '1rem 0 0 5rem',
    })

    const ImageAndPara = styled('div')({
        position: 'relative',
        display: 'flex'
    })

    const Name = styled('div')({
        position: 'absolute',
        bottom: '4rem',
        right: '4rem'
    })

    const NamePara = styled('h1')({
        fontSize: '8rem',
        lineHeight: '8rem'
    })

    return (
        <MainStyle>
            <MainIntro>FRONTEND <br/>DEVELOPER</MainIntro>
            <ImageAndPara>
                <MainImage/>
                <Name>
                    <NamePara>
                        MINWOO <br/>JUNG
                    </NamePara>
                </Name>
            </ImageAndPara>
        </MainStyle>
    )
}

export default Main