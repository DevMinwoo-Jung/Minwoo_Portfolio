import { useLottie } from 'lottie-react'
import React, { useRef, memo } from 'react'
import Lottie from 'lottie-web'
import email from '../../lottieJSON/email.json'

const Email = () => {
  const lottie = useRef()
    const options = {
        animationData: email,
        loop: true,
        autoplay: true,
        name: 'email',
        container: lottie.current
      };
    const style = {
        width: '60px',
        height: '60px'
    }
      const { View } = useLottie(options, style);
    
      return (
        <div ref={lottie}
          onMouseEnter={() => Lottie.play('email')}
          onMouseLeave={() => Lottie.pause('email')}
        >
            {View}
        </div>  
      )
}

export default Email