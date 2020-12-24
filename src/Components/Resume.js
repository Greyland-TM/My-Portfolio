import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';

class Resume extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
                            alt='Avatar'
                            style={{height: '150px'}}
                        ></img>
                    </div>

                    <h4 style={{paddingTop: '1em'}}>Greyland Miller</h4>
                    <h4 style={{color: 'gray'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}></hr>
                    <p>I am a sofware engineering student at Portland State University. I have been coding and developing software
                        for the past 3 years on my own. And recently recieved a promotion at Columbia Helicopters to the position of 
                        Buisness Intelligence Developer as they recognize what I can offer to the company.
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}></hr>
                    <h5>Address</h5>
                    <p>8124 SE Hawthorne Blvd.</p>
                    <h5>Phone</h5>
                    <p>(541) 280-6292</p>
                    <h5>Email</h5>
                    <p>Greyland.Official@gmail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}></hr>
                </Cell>
                <Cell className='resume-right-col' col={8}>
                    <Education></Education>
                </Cell>
            </Grid>
        )
    }
}

export default Resume;