import { useLottie } from 'lottie-react'
import React, { useRef, useEffect, memo } from 'react'
import Lottie from 'lottie-web'
import email from '../../lottieJSON/email.json'

const _Email = () => {
    const lottie = useRef()
    const options = {
        animationData: email,
        loop: true,
        autoplay: false,
        name: 'email',
        container: lottie.current
      };
    const style = {
        width: '8rem',
        height: '8rem',
    }
    const { View } = useLottie(options, style);

    useEffect(() => {
        Lottie.stop('email')
    }, [])
    
      return (
        <div ref={lottie}
          onMouseEnter={() => Lottie.play('email')}
          onMouseLeave={() => Lottie.pause('email')}
        >
            {View}
        </div>  
      )
}

const Email = memo(_Email)

export default Email