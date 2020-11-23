import React, { Component } from 'react'
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl'

class Personal extends Component {
    render() {
        return (
            <div className ="contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
                        <h2>Karen Barseghyan</h2>
                        <img src = "https://cdn1.iconfinder.com/data/icons/human-resources-3-2/128/214-512.png"
                        alt = "avatar"
                        style ={{height: '200px'}}/>
                        <p>My Personal Page</p>
                    </Cell>
                    <Cell col = {6}>
                        <h2>Personal Information</h2>
                        < hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className = "contact-list-content">
                                        <div>
                                        <i class ="fa fa-phone-square" /> 
                                            &nbsp;(374) 55-377-443
                                        <br />
                                        </div>
                                    </ListItemContent >
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className = "contact-list-content">
                                        <div>
                                        <i class="fa fa-envelope-square" /> 
                                        &nbsp; karenbarseghyan90@gmail.com
                                        </div>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className = "contact-list-content">
                                        <i class="fa fa-address-card" /> 
                                        &nbsp; Yerevan, Armenia
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Personal
