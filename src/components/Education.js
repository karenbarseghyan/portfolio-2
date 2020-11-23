import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

class Education extends Component {
    render() {
        return (
            <div className ="contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
                        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/AUA_official_logo.png/1280px-AUA_official_logo.png"
                        alt = "AUA"
                        style ={{height: '200px'}}/>
                        <p>College of Business and Economics</p>
                        <p>MS in Economics</p>
                        <p>Sep 2014 to Jul 2016</p>
                    </Cell> 
                    <Cell col = {6}>
                        <img src = "https://aec.am/wp-content/uploads/2017/10/RAU-Logo_eng.png"
                        alt = "RAU"
                        style ={{height: '200px'}}/>
                        <p>Institute of Economics and Business</p>
                        <p>BS in Economics</p>
                        <p>Sep 2014 to Jul 2016</p>
                    </Cell> 
                </Grid>
            </div>
        )
    }
}

export default Education
