import { useLottie } from 'lottie-react'
import React, { useRef, useEffect, memo } from 'react'
import incomingCall from '../../lottieJSON/incomingCall.json'
import Lottie from 'lottie-web'

const _Call = () => {
    const lottie = useRef()
    const options = {
        animationData: incomingCall,
        loop: true,
        autoplay: false,
        name: 'call',
        container: lottie.current
      };
    const style = {
        width: '60px',
        height: '60px',
        color: 'black'
    }
    const { View } = useLottie(options, style);

    useEffect(() => {
        Lottie.stop('call')
    }, [])

      return (
        <div ref={lottie}
          onMouseEnter={() => Lottie.play('call')}
          onMouseLeave={() => Lottie.pause('call')}
        >
            {View}
        </div>  
      )
}

const Call = memo(_Call)

export default Call