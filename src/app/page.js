
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Particle from "./components/Particle"
import Taskbar from "./components/Taskbar"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"


export default function Home() {
  
  return (
    <main className="bg-background overflow-hidden">
      <Taskbar></Taskbar>
      <section id="home"className="z-2">
        <div className="absolute w-full h-screen flex justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl t">Joshua Nguyen</h1>
            <h2 className="text-2xl m-4">Software Engineer and Student at the University of British Columbia</h2>
            <div className="text-xl flex justify-evenly w-4/5  p-2">
              <a href="https://github.com/jn-han" className="flex flex-wrap items-center p-3 justify-between bg-accent rounded-full hover:bg-blue transition duration-500 ease-in-out ">
                <FontAwesomeIcon icon={faGithub} className="w-8 mx-2"/> 
                <p className="mx-2">GitHub</p>
              </a>
              <a href="https://www.linkedin.com/in/jn-han/" className="flex flex-wrap items-center justify-between bg-accent rounded-full p-3 hover:bg-blue transition duration-500 ease-in-out">
                <FontAwesomeIcon icon={faLinkedin} className="w-8 mx-2"/>
                <p className="mx-2">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 animate-bounce flex flex-col items-center w-full mb-2">
          <p>learn more</p>       
          <FontAwesomeIcon className="w-8" icon={faArrowDown}/>
        </div>

        <Particle className="absolute"/>
      </section>

      <section id="projects" className="flex min-h-screen w-full flex-col items-center justify-between">
        <div className="mt-24 flex flex-col justify-center items-center">
          My Projects
        </div>
      </section>

      <section id="education" className="flex min-h-screen w-full flex-col items-center justify-between">
        <div className="mt-24 flex flex-col justify-center items-center">
          Education Section
        </div>

      </section>

      <section id="contact" className="flex min-h-screen w-full flex-col items-center justify-between">
        <div className="mt-24 flex flex-col justify-center items-center">
          Contact Section
        </div>
      </section>



    </main>
  )
}
