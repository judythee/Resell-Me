import React from 'react'
import Button from './Button';

const Hero = ({hero}) => {
  return (
    <div className='hero'>
        <div className="hero-inner">
            <h1>{hero.title}</h1>
            <p>{hero.text}</p>
            <div className="btnBox">
              <Button toPath="/" title="Sign Up For Free" />
              <Button toPath="/" title="Read About Us" />
            </div>
        </div>
    </div>
  )
}

export default Hero