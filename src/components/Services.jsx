// Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {faPalette} from '@fortawesome/free-solid-svg-icons';
import {faKeyboard} from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';  
import { faKaggle } from '@fortawesome/free-brands-svg-icons';  
import { faHandshake } from '@fortawesome/free-solid-svg-icons';  

import './Services.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

function Services() {
  return (
    <>
      <div className='group'>
        <h4 className='animated-underline'>Services</h4>
        <div className='se'>
          <div>
            <FontAwesomeIcon icon={faCode} size="2x" />
            <p>
              <h5>Front-End-Developer</h5>
              <br />
              Web developing with amazing UI and with advanced frameworks
            </p>
          </div>
          <div> 
          <FontAwesomeIcon icon={faPalette} size="2x"/>
            <p>
              <h5>Design</h5>
              <br />
              UI and prototype designer and having knowledge on canva and figma
            </p></div>
          <div> <FontAwesomeIcon icon={faKeyboard} size="2x" />
               <p>
                      <h5>Programmer</h5>
                         <br />
                      A programmer with excellent Problem solving skills and knowledge in OOPS concept
</p></div>
        </div>
        <div className='se1'>
          <div>  
          <FontAwesomeIcon icon={faCogs} size="2x" />
            <p>
                      <h5>Machine Learning Models</h5>
                         <br />
                      Basic understanding of Machine Learning Models and data preprocessing steps
           </p>      </div>
          <div><FontAwesomeIcon icon={faKaggle} size="2x"/>
            <p>
                      <h5>Kaggle Skills</h5>
                         <br />
                      Kaggle notebook expert and partcipated in few competitions
           </p></div>
          <div><FontAwesomeIcon icon={faHandshake}size="2x" />
            <p>
                      <h5>Commmunication </h5>
                         <br />
                         Good at talking and writing in a way that makes things clear for everyone on the team.
           </p></div>
        </div>
      </div>
    </>
  );
}

export default Services;
