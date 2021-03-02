import React, { useContext, useState, useEffect } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Experiences = ({experiencesShort}) => {
  const { experiences } = useContext(PortfolioContext);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [experiencesDisplay, setExperiencesDisplay] = useState(experiencesShort);

  function handleSeeMore() {
    setIsSeeMore(true)
    setExperiencesDisplay(experiences)
  }

  return (
    
    <section id="experiences">
      
      <Container>
        <div className="experience-wrapperr">
          <Title title="Experiences" />
          <Timeline lineColor={'#ddd'}>
            {experiencesDisplay.map((experience) => {
              const { title, organization, location, url, description, img, date, color, id } = experience;
              return (
                <TimelineItem
                  key={id}
                  dateText={date}
                  style={{ color: color }}
                  dateInnerStyle={{ background: color }}
                >
                  <div className="card">
                    <div className="img-hover-zoom-large">
                      <img src={img} className="image-large" alt={organization}/>
                    </div>
                    <div className="organization-container">
                      <a className="nav-item" href={url} target="_blank" rel="noreferrer">{organization}</a>
                    </div>
                    
                    <br/>

                    <h3>{title}</h3>
                    <h4>{location}</h4>
                    <br/>

                    <p>
                      {description}
                    </p>
                  </div>
                </TimelineItem>
              );
            })}

          </Timeline>
        </div>
        {isSeeMore ? <></> :
            <div className='download-button-container'>
              <div
                className="cta-btn cta-btn--hero"
                onClick={() => handleSeeMore()}>
                <h2>Show more</h2>
              </div>
            </div>
          }
      </Container>
    </section>
  );
};

export default Experiences;
