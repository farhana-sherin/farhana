import React from 'react'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { ContactPage } from './contact'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <ContactPage/>
 
    </div>
  )
}