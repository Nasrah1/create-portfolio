import React, { Component } from "react";
import { Grid, Cell,} from 'react-mdl';

class About extends Component{
    render() {
return(
    <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            </div>
            <h2 style={{paddingTop: '2em'}}>Nasra Hassan</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>My name is Nasra Hassan and I am a dedicated Full Stack Web Developer with a background in Customer Service and Health Records. I live in the Twin Cities Metro Area. I am both driven, self-motivated, and constantly finding ways to grow. I am very passionate about Web Development
                            and strive to better myself as a developer.</p>
                            <p>In my freetime, I enjoy reading, painting, and traveling.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
    </Grid>
  </div>
)
}
}
export default About;