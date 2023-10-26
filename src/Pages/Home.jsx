import React from 'react'
import Hero from '../components/Hero';
import data from '../../database/db';
import LaptopView from '../components/LaptopView';
import About from '../components/About';
import GettingStarted from '../components/GettingStarted';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import Partners from '../components/Partners';
import FeaturedIn from '../components/FeaturedIn';
import SignUp from '../components/SignUp';

const Home = () => {
  return (
    <div className='home'>
      {data.Hero && data.Hero.map(hero => {
        return(
          <>
            <Hero hero={hero} /> 
            <LaptopView/>
          </>
        )
      })}
      {data.About && data.About.map(about => {
        return(
          <>
            <About about={about} />
          </>
        )
      })}
      {data.GetStarted && data.GetStarted.map(start => {
        return(
          <>
            <GettingStarted start={start} />
          </>
        )
      })}
      {data.Features && data.Features.map(feature => {
        return(
          <>
            <Features feature={feature} />
          </>
        )
      })}
      {data.UseCases && data.UseCases.map(usecase => {
        return(
          <>
            <UseCases usecase={usecase} />
          </>
        )
      })}
      {data.Testimomials && data.Testimomials.map(testimony => {
        return(
          <>
            <Testimonials testimony={testimony} />
          </>
        )
      })}
      {data.FAQs && data.FAQs.map(faq => {
        return(
          <>
            <FAQs faq={faq} />
          </>
        )
      })}
      <FeaturedIn/>
      {data.SignUp && data.SignUp.map(sign => {
        return(
          <SignUp sign={sign} />
        )
      })}
      <Partners/>
    </div>
  )
}

export default Home