import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';
import '../App.css';
import myPic from './ProfilePic.jpg'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className='landing-grid' >
                    <Cell col={12}>
                            <div style={{height: '30px', padding: '20px'}}></div>
                            <img 
                                className='avatar-img'
                                src={myPic}
                                alt='avatar'
                            />
                        
                        <div className='banner-text'>
                            <h1>Greyland Miller</h1>
                            <p>Buisness Intelligence / Freelance Front End Developer</p>

                            <hr/>
                            <p>HTML/CSS | JavaScript | React Native | VBA | Python | C | C#</p>
                            <div className='social-links'>

                                {/* Github */}
                                <a href='https://github.com/Greyland-TM/' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-github' aria-hidden='true' />
                                </a>

                                {/* Linkden */}
                                <a href='https://www.linkedin.com/in/greyland-miller-a08b1a1b5/' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-linkedin' aria-hidden='true' />
                                </a>

                                {/* FaceBook */}
                                <a href='https://www.facebook.com/greyland.miller/' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-facebook' aria-hidden='true' />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;