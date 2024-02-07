
import React from 'react';
import './Work.css';

const projects = [
    {
        title: "Event Management",
        description: "Designed a Event management website using React for Frontend and MySql for Backend",
        github: "https://github.com/INIKA-N/agile-projects.git",
    },
    {
        title: "Nursery Shopping Website",
       
        description: "Designed a nursery shopping website with the help of HTML,CSS and Javascript",
        github: "https://github.com/INIKA-N/online-nursery-shopping.git",
    },
    {
        title: "Mushroom Classification Model",
       
        description: "Developed a Model(Random Forest) to classify mushroom as poisonous or edible",
        github: "https://github.com/INIKA-N/mushroom-classifier-using-ml-model.git",
    },

];

function Work() {
    return (
        <div className='wo'>
             <h4 className='animated-underline'>Works</h4>
            <div className="portfolio">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                       
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.github}>
                    <button type="submit" className="btn">Code</button>
                </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
