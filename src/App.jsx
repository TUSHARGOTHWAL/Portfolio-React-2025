import React from 'react'
import Home from './components/Home'
import TechStack from './components/TechStack'
import AboutMe from './components/AboutMe'

import { TimelineDemo } from './components/TimelineDemo.jsx'
import Projects from './components/Projects.jsx'
import { VelocityScroll } from './components/VelocityScroll.jsx'
import RevealLinks from './components/RevealLinks.jsx'
import ContactForm from './components/ContactForm.jsx'
import MyProjectsText from './components/MyProjectsText.jsx'

function App() {
  return (
    <>
      <Home />
      <TechStack />
      <AboutMe></AboutMe>
      {/* <div className="relative h-[500px] rounded-lg w-full bg-background overflow-hidden ">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="green"
        maxOpacity={0.4}
        flickerChance={0.1}
        height={2400}
        width={2400}
      />
    </div> */}



<TimelineDemo />
<MyProjectsText></MyProjectsText>
<Projects></Projects>

<VelocityScroll defaultVelocity={2} numRows={2} className={"bg-gradient-to-r from-blue-500 to-green-500 h-80 "  } >
      Developer Designer Community
    </VelocityScroll>

    <section className="h-96 bg-gradient-to-r from-blue-500 to-green-500 flex flex-col md:flex-row justify-center items-center pb-40 gap-10 md:gap-40">
  {/* Main Heading */}
  <h1 className="text-4xl md:text-6xl text-black font-extrabold text-center border-b-4 border-black ">FIND ME?</h1>

  {/* Placeholder for the RevealLinks component */}
  <RevealLinks />
</section>


<ContactForm></ContactForm>

    </>


  )
}

export default App
