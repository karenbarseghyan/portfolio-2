import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style = {{width: '100%', margin: 'auto'}}>
               <Grid className = "landing-grid">
                    <Cell col={12}>
                        <img />
                        <div className = "banner-text">
                            <h1>Karen Barseghyan</h1>
                        <hr />
                            <div className="social-links" >
                                <a href = "http://github.com/karenbarseghyan" rel="noreferrer" target = "_blank">
                                    <i className = "fa fa-github" aria-hidden="true" /> 
                                </a>
                                <a href = "https://www.linkedin.com/in/karen-barseghyan-1730a671/" rel="noreferrer" target = "_blank">
                                    <i className = "fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
               </Grid> 
            </div>
        )
    }
}

export default LandingPage
