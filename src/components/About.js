import React from 'react'
import aboutimage from '../images/team-image.png';
import HomeAbout from './HomeAbout';


export default function About() {
  return (
    <HomeAbout title="Welcome to the about page of" image={aboutimage} btnLink="Contact Now" link="/components/contact"/>
  )
}
