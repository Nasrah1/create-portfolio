import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';




class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="resume-right-col" col={8}>
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Grab My Resume</h2>
              <p><strong><a href={`${process.env.PUBLIC_URL}/assets/img/resume.pdf`} target="_blank" rel="noopener noreferrer">Resume <i className="fas fa-file"></i></a></strong></p>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;