import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import myPic from './ProfilePic.jpg'

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Greyland Miller</h2>
                        <img
                            src={myPic}
                            alt='Avatar'
                            style={{height: '250px', borderRadius: '45%'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '2em'}}>
                            My name is Greyland and here is my contact userform. I check my emails daily and will respond as quickly as I am able.
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true'></i>
                                        (541) 280-6292
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-fax' aria-hidden='true'></i>
                                        (541) 280-6292
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true'></i>
                                        Greyland.Official@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-skype' aria-hidden='true'></i>
                                        My skype ID
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

export default Contact;