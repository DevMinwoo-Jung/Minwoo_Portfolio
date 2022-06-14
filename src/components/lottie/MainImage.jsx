import { useLottie } from 'lottie-react'
import React, {useRef, memo } from 'react'
import mainImage from '../../lottieJSON/main.json'
import {styled} from "@mui/system";

const _MainImage = () => {
    const lottie = useRef()

    const options = {
        animationData: mainImage,
        loop: true,
        autoplay: true,
        name: 'mainImage',
        container: lottie.current
      };

    const Style = styled('div')(({ theme }) => ({
        width: '35rem',
        height: '35rem',
        marginLeft: '10rem',
        [theme.breakpoints.down('sm')]: {
            width: '15rem',
            height: '15rem',
            marginLeft: '2rem',
        },
    }));


    const { View } = useLottie(options);

      return (
        <Style ref={lottie}>
            {View}
        </Style>
      )
}

const MainImage = memo(_MainImage)

export default MainImage