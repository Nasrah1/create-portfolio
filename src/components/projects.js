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
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/Eat-Da-Burger!.gif) center / cover'}} >Eat-Da-Burger</CardTitle>
            <CardText>
            A Burger App that lets users input the names of burgers they’d like to eat.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Deployed</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/Employee-Directory.gif) center / cover'}} >Employee Directory</CardTitle>
            <CardText>
            This app utilizes an API to populate random users and then create a directory.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Nasrah1/burgerapp">GitHub</Button>
              <Button href="https://github.com/Nasrah1/burgerapp">Deployed</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/Fitness-Tracker.gif) center / cover'}} >Fitness Tracker</CardTitle>
            <CardText>
            Fitness tracker app that allows users to add and update their daily exercise workouts.


            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Deployed</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>More Coming</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>More Coming</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>More Coming</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML</Tab>
          <Tab>CSS</Tab>
          <Tab>Javascript</Tab>
          <Tab>React</Tab>
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