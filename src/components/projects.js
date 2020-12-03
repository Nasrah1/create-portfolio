import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${process.env.PUBLIC_URL}/assets/img/Eat-Da-Burger.gif`}} >Eat-Da-Burger</CardTitle>
            <CardText>
            A Burger App that lets users input the names of burgers they’d like to eat.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Nasrah1/burgerapp">GitHub</Button>
              <Button href="https://stormy-journey-23402.herokuapp.com/">Deployed</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.seekpng.com/png/small/124-1247381_new-employee-icon-people-transparent-background-employee-icon.png) center / cover'}} >Employee Directory</CardTitle>
            <CardText>
            This Employee app utilizes an API to populate random users and then create a directory.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/Nasrah1/employee-directory">GitHub</Button>
            <Button href="https://arcane-temple-58442.herokuapp.com/">Deployed</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.vecteezy.com/system/resources/thumbnails/001/248/847/small/fitness-icons-set.jpg) center / cover'}} >Fitness Tracker</CardTitle>
            <CardText>
            Fitness tracker app that allows users to add and update their daily exercise workouts.


            </CardText>
            <CardActions border>
            <Button href="https://github.com/Nasrah1/Workout-Tracker">GitHub</Button>
            <Button href="https://intense-lowlands-57638.herokuapp.com/">Deployed</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-256/workbook-2185031-1827413.png) center / cover'}} >Note Taker</CardTitle>
          <CardText>
          In this application you'll find a db.json file on the backend that will be used to store and retrieve notes using the fs module.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/Nasrah1/Nasrah1.github.io/tree/master/NOTE-TAKER">GitHub</Button>
            <Button href="https://stormy-reef-22729.herokuapp.com/">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/700/1*GyQy2gUwYhBBe7iKUmMdnQ.jpeg) center / cover'}} >Budget Tracker</CardTitle>
          <CardText>
          Budget Tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection.
          </CardText>
          <CardActions border>
          <Button href="https://github.com/Nasrah1/Budget-Tracker">GitHub</Button>
          <Button href="https://afternoon-meadow-52752.herokuapp.com/">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-256/business-employee-resume-recruitment-badge-star-appraisal-12333.png) center / cover'}} >First Portfolio</CardTitle>
          <CardText>
          This is my portfolio that includes my about, previous projects/homework and my my most current resume and contact info.


          </CardText>
          <CardActions border>
          <Button href="https://github.com/Nasrah1/Updated-Portfolio">GitHub</Button>
          <Button href="https://nasrah1.github.io/Updated-Portfolio/">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(./img/Eat-Da-Burger!.gif) center / cover'}} ></CardTitle>
          <CardText>
          More Coming..
          </CardText>
          <CardActions border>
            <Button href="https://github.com/Nasrah1/Budget-Tracker">GitHub</Button>
            <Button href="https://afternoon-meadow-52752.herokuapp.com/">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(/Employee-Directory.gif) center / cover'}} ></CardTitle>
          <CardText>
          More Coming..
          </CardText>
          <CardActions border>
          <Button href="https://github.com/Nasrah1/Updated-Portfolio">GitHub</Button>
          <Button href="https://nasrah1.github.io/Updated-Portfolio/">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(../img/Fitness-Tracker.gif) center / cover'}} ></CardTitle>
          <CardText>
          More Coming..


          </CardText>
          <CardActions border>
          <Button href="">GitHub</Button>
          <Button href="">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(./img/Eat-Da-Burger!.gif) center / cover'}} ></CardTitle>
          <CardText>More Coming
          </CardText>
          <CardActions border>
            <Button href="">GitHub</Button>
            <Button href="">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(/Employee-Directory.gif) center / cover'}} ></CardTitle>
          <CardText>
          More Coming
          </CardText>
          <CardActions border>
          <Button href="">GitHub</Button>
          <Button href="">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(../img/Fitness-Tracker.gif) center / cover'}} ></CardTitle>
          <CardText>
          More Coming


          </CardText>
          <CardActions border>
          <Button href="https://github.com/Nasrah1/Workout-Tracker">GitHub</Button>
          <Button href="https://intense-lowlands-57638.herokuapp.com/">Deployed</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Project</Tab>
          <Tab>Project</Tab>
          <Tab>Project</Tab>
          <Tab>Project</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;