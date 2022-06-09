import React, { VFC } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { styled } from "@mui/system";

export type ProjectProps =  {
    project: any
}

const Project:VFC<ProjectProps> = () => {
    const theme = useTheme();

    const CardStyle = styled(Card)({
        width: '1000px',
        height: '250px',
        display: 'flex',
    })

    const CardMediaStyle = styled(CardMedia)({
        width: '250px'
    })

    const CardContentStyle = styled('div')({
        margin: '2rem',
        textAlign: 'left',
        maxWidth: '650px'
    })

    const CardDiv = styled('div')({
        width: '100%',
        margin: 'auto'
    })

    return (
        <CardDiv>
            <CardStyle>
                <CardMediaStyle
                    image='imgs/icon/javascript.png'
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContentStyle>
                        <p>
                            Live From Space            Live From Space           Live From Space           Live From Space           Live From Space           Live From Space           Live From Space
                        </p>
                        <p>
                            Mac Miller
                        </p>
                    </CardContentStyle>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>
            </CardStyle>
        </CardDiv>
    )
}

export default Project