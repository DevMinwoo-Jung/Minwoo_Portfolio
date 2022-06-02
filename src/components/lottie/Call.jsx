import { useLottie } from 'lottie-react'
import React, { useRef, memo } from 'react'
import incomingCall from '../../lottieJSON/incomingCall.json'
import Lottie from 'lottie-web'

const Call = () => {
    const lottie = useRef()
    const options = {
        animationData: incomingCall,
        loop: true,
        autoplay: true,
        name: 'call',
        container: lottie.current
      };
    const style = {
        width: '60px',
        height: '60px',
        color: 'black'
    }
      const { View } = useLottie(options, style);
    
      return (
        <div ref={lottie}
          onMouseEnter={() => Lottie.play('call')}
          onMouseLeave={() => Lottie.pause('call')}
        >
            {View}
        </div>  
      )
}

export default Call