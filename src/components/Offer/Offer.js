import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './offer.css'

const Offer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <div className='offer-container'>
    <div className='component-title'><h2>What We Offer</h2></div>
        <div className='accordion-body'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><ul><li><span>Monthly Meetups</span></li></ul></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='right-content'>
                <p> 
                    Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.
                </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><ul><li><span>Diverse Network</span></li></ul></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='right-content'>
              <p>
                Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography> <ul><li><span>Knowledge Sharing</span></li></ul></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='right-content'>
              <p>
                Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography> <ul><li><span>Collaboration Opportunities</span></li></ul></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='right-content'>
              <p>
                Find potential co-founders, mentors, or partners for your next big venture.   
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography> <ul><li><span>Community Support</span></li></ul></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='right-content'>
              <p>
                Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>
    </>
  );
};

export default Offer;
