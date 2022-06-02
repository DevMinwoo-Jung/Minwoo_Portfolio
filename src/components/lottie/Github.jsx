import { useLottie } from 'lottie-react'
import React, { useRef, memo } from 'react'
import Lottie from 'lottie-web'
import github from '../../lottieJSON/github.json'

const _Github = () => {
    const lottie = useRef()

    const options = {
        animationData: github,
        loop: true,
        autoplay: false,
        name: 'github',
        container: lottie.current
      };
    const style = {
        width: '60px',
        height: '60px'
    }

      const { View } = useLottie(options, style);
    
      return (
        <div ref={lottie}
          onMouseEnter={() => Lottie.play('github')}
          onMouseLeave={() => Lottie.pause('github')}
        >
            {View}
        </div>  
      )
}

const Github = memo(_Github)

export default Github