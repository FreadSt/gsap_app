import React, {useEffect, useRef} from 'react'

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement| null>(null)

  useEffect(() => {
    if(videoRef.current){
      if ("playbackRate" in videoRef.current) {
        videoRef.current.playbackRate = 2
      }
    }
  }, [])
  return (
    <section id='hero'>
      <div>
        <h1>MacBook Pro</h1>
        <img src='/title.png' alt='mac title'/>
      </div>
      <video
        ref={videoRef}
        src='/videos/hero.mp4'
        autoPlay
        muted
        playsInline
      />
      <button>
        Buy
      </button>
      <p>From $1599 or $133/month for 12 month</p>
    </section>
  )
}
export default Hero
