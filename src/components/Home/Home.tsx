import { styled } from '@mui/system';
import React from 'react'
import MainImage from '../lottie/MainImage'

const Main = () => {
    const MainStyle = styled('div')({
        width: '100%',
        marginTop: '70px'
    })

    const MainIntro = styled('h1')(({ theme }) => ({
        fontSize: '8rem',
        margin: '1rem 0 0 5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
            margin: '1rem 0 2rem 1rem',
        },
    }));

    const ImageAndPara = styled('div')({
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between'
    })

    const NamePara = styled('h1')(({ theme }) => ({
        fontSize: '8rem',
        lineHeight: '8rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
            margin: '1rem 0 0 1rem',
            lineHeight: '4rem',
        },
    }));

    const Name = styled('div')(({ theme }) => ({
        position: 'absolute',
        bottom: '4rem',
        right: '4rem',
        [theme.breakpoints.down('sm')]: {
            bottom: '6.5rem',
            right: '1rem',
        },
    }));


    return (
        <MainStyle>
            <MainIntro>FRONTEND <br/>DEVELOPER</MainIntro>
            <ImageAndPara>
                <MainImage/>
                    <NamePara>
                        MINWOO <br/>JUNG
                    </NamePara>
            </ImageAndPara>
        </MainStyle>
    )
}

export default Main