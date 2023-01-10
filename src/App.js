import {BsTelegram, BsGithub, BsCpu,BsFillMoonStarsFill} from "react-icons/bs";

function App() {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen">
            <nav className='py-10 mb-12 flex justify-between items-center'>
                <h1 className="font-burtons text-2xl">JSONCMD</h1>
                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill className="text-3xl cursor-pointer"/>
                    </li>
                    <li className="flex bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6">
                        <a href="/resume">Resume</a>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-center">
                <img
                    src={require('../src/assets/rounded-image.png')}
                    className='w-[320px] h-[320px] rounded-full'/>
            </div>
            <div className="text-center pt-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">Denis Kalashnikov</h2>
                <h3 className="text-2xl py-2">React / Native Developer</h3>
                <p className="text-md py-5 leading-8 text-gray-800">
                    Freelancer providing services for programming
                    needs. I can help you with your project.
                    Follow down below to contact with me
                </p>

                <div className="flex gap-24 justify-center text-3xl text-gray-600 mt-24">
                    <BsTelegram className="cursor-pointer"/>
                    <BsGithub className="cursor-pointer"/>
                    <BsCpu className="cursor-pointer"/>
                </div>
            </div>

        </section>
      </main>
    </div>
  );
}

export default App;
