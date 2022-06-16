import { useLottie } from 'lottie-react'
import React, {useRef, useEffect, memo } from 'react'
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
        width: '8rem',
        height: '8rem',
        pointer: 'cursor',

        'path:nth-child(*)':{
          fill: 'white' /* shadowDOM style does NOT style global DOM */
        }
    }
    const { View } = useLottie(options, style);

    useEffect(() => {
        Lottie.stop('github')
    }, [])

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