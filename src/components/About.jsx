import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gray-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 ">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, My self Harsh.
        </p>

        <br />

        <p className="text-xl">
        
        <ol>
        <li>I am enthusiastic and curious to learn new skills. </li>
        <li>I can code proficiently in Python, Javascript, React, Tailwind.</li> 
        <li>Enhancing my DSA skill by regularly participating in coding competitions.</li> 
        <li>I have good knowledge of Machine learning, SQL, AI.</li>
        <li>Currently working on Full-stack and Open source contributions.</li>
        <li>Proven good Communication and leadership skills.</li>
        </ol>


        </p>
      </div>
    </div>
  )
}

export default About