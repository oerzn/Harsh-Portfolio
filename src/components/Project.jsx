import React from 'react';
import web1 from '../assets/portfolio/Web--calculator.png'
import Wethr from '../assets/portfolio/project-assest.png'
import data1 from '../assets/portfolio/Data-visualization.png'
import Slot1 from '../assets/portfolio/Untitled design.png'
import blog from '../assets/portfolio/blog.png'



const Project = () => {
    
    const projects = [
      {
        id: 1,
        src: web1,
        demo: 'https://oerzn.github.io/Web-Calculator/', 
        code: 'https://github.com/oerzn/Web-Calculator', 
      },
      {
        id: 2,
        src: Wethr,
        demo: 'https://oerzn.github.io/Weather-app-JS/', 
        code: 'https://github.com/oerzn/Weather-app-JS', 
      },
      {
        id: 3,
        src: data1,
        demo: 'https://github.com/oerzn/data-visualizing-BI', 
        code: 'https://github.com/oerzn/data-visualizing-BI', 
      },
      {
        id: 4,
        src: Slot1,
        demo: 'https://github.com/oerzn/Slot-Machine-Javascript', 
        code: 'https://github.com/oerzn/Slot-Machine-Javascript', 
      },
      {
        id: 5,
        src: blog,
        demo: 'https://github.com/oerzn', 
        code: 'https://github.com/oerzn',  
      }
      
    ];
    const handleButtonClick = (url) => {
        window.open(url, '_blank'); 
      };
  
    return (
      <div
        name="project"
        className="bg-gray-900 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-blue-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 pb-8 sm:px-0">
            {projects.map(({ id, src,demo,code }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:animate-bounce"
                />
                <div className="flex items-center justify-center">
                  <button onClick={() => handleButtonClick(demo)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:bg-blue-500">
                    Demo
                  </button>
                  <button onClick={() => handleButtonClick(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:bg-blue-600">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Project