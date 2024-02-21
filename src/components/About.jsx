import React from 'react';
import './About.css';

function About() {
    const progressValues = [
        { label: 'Java : ', value: 80 },
        { label: 'C : ', value: 50 },
        { label: 'UI/UX  : ', value: 60 },
        { label: 'ML Model : ', value: 30 },
        { label: 'HTML,CSS :', value: 80 },
        { label: 'React : ', value: 50 },
    ];

    return (
        <>
            <div className="about">
                <h4 className='animated-underline'>About Me</h4>
                <h3>Hi I'm INIKA</h3>
                <h2>Developer - - Student</h2>
                <p>
                Aspiring web developer and UI/UX designer with a passion for seamlessly integrating design and functionality.
                    <br></br>
                    Dedicated to creating user-centric experiences, I seek to leverage strong interpersonal skills and leadership qualities
                    <br></br> to lead collaborative teams and drive innovative digital solutions.
                </p>
                <div className='progress-container'>
                    {progressValues.map((progress, index) => (
                        <div className='progress-item' key={index}>
                            <label htmlFor={`progress${index + 1}`}>{progress.label}</label>
                            <progress id={`progress${index + 1}`} value={progress.value} max='100'></progress>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;
