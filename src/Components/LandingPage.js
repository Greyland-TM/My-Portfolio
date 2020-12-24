import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';
import '../App.css';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className='landing-grid' >
                    <Cell col={12}>
                        <img 
                            src='https://amandajmcgeecom.files.wordpress.com/2018/09/sokka.png'
                            alt='avatar'
                            className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Hey there... You</h1>

                            <hr/>
                            <p>HTML/CSS | JavaScript | React Native | VBA | Python</p>
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