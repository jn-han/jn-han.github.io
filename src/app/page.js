
import Particle from "./components/Particle"
import Taskbar from "./components/Taskbar"


export default function Home() {
  
  return (
    <main>
        <Taskbar></Taskbar>
      <div className="min-h-screen w-full">
        <Particle className=" -z-10"/>
        <div className=" z-10">hello</div>
      </div>
      <div>
        hello
      </div>



    </main>
  )
}
