import React from 'react';
import { ProjectItems } from './ProjectItems'
import Card from 'react-bootstrap/Card';

import '../../App.css';
import { CardColumns } from 'react-bootstrap';

const Project = () => {
  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-center py-5'>Portfolio</h1>
        </div>
        <CardColumns>

        {ProjectItems.map((card, index) => {
        return (
          <div>
            <Card className="card" style={{ width: '18rem' }} key={card.projectTitle}>
              <Card.Title className="card-title">{card.projectTitle}</Card.Title>
              <Card.Img variant='top' src={card.thumbnail}></Card.Img>
              <Card.Body>
                <Card.Link className="card-link" href={card.github} target="_blank">GitHub</Card.Link>
                <Card.Link className="card-link"  href={card.deployed} target="_blank">Link to Deployed Site</Card.Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
        </CardColumns>


      </div>

)
}

export default Project;
