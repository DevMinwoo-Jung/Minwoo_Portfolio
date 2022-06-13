import { useLottie } from 'lottie-react'
import React, {useRef, memo } from 'react'
import mainImage from '../../lottieJSON/main.json'

const _MainImage = () => {
    const lottie = useRef()

    const options = {
        animationData: mainImage,
        loop: true,
        autoplay: true,
        name: 'mainImage',
        container: lottie.current
      };
    const style = {
        width: '35rem',
        height: '35rem',
        marginLeft: '10rem',
    }
    const { View } = useLottie(options, style);

      return (
        <div ref={lottie}>
            {View}
        </div>  
      )
}

const MainImage = memo(_MainImage)

export default MainImage