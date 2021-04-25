import React from 'react';

const Resume = () => {
  return (
    <div className='resume'>
      <div className='d-flex justify-content-center my-5'>
        <h1 className='content-header'>Resume</h1>
      </div>
      <div className='container resume-wrapper'>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h4>Front-end</h4>
            {/* TODO: turn lists into reusable components */}
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h4>Back-end</h4>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL | Sequelize</li>
              <li>MongoDB | Mongoose</li>
              <li>REST</li>
              <li>APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
