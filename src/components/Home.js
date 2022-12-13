import React from 'react'
import homeimage from '../images/home-image.png';
import HomeAbout from './HomeAbout';

export default function Home() {
  return (
    <HomeAbout title="Boost your progress using react with" image={homeimage} btnLink="Visit Now" link="/components/services"/>
  )
}
