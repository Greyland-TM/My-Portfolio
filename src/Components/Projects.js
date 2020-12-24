
import React, { Component } from 'react';
import './ProjectsCard'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, Button, IconButton } from 'react-mdl'
import ProjectCard from './ProjectsCard';
import ProjectCardTest from './ProjectsCard';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className='projects-grid'>
                <ProjectCard
                    langues='React Native' 
                    url='url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'
                    text='Here is Project #1 of the react projects I want to develope and present.'
                ></ProjectCard>
                <ProjectCard
                    langues='React Native' 
                    url='url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'
                    text='Here is Project #2 of the react projects I want to develope and present.'
                ></ProjectCard>
                <ProjectCard
                    langues='React Native' 
                    url='url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'
                    text='Here is Project #3 of the react projects I want to develope and present.'
                ></ProjectCard>
                </div>
            )
        }else if(this.state.activeTab === 1) {
            return(
                <div className='projects-grid'>
                <ProjectCard
                    langues='Microsoft VBA' 
                    url='url(https://wallpaperaccess.com/full/833308.png) center / cover'
                    text='VBA project #1. This will be my main spreadsheet from work.'
                ></ProjectCard>
                <ProjectCard
                    langues='Microsoft VBA' 
                    url='url(https://wallpaperaccess.com/full/833308.png) center / cover'
                    text='VBA project #2. I might put the thing I made for Randy here.'
                ></ProjectCard>
                <ProjectCard
                    langues='Microsoft VBA' 
                    url='url(https://wallpaperaccess.com/full/833308.png) center / cover'
                    text='VBA project #3. I still need to develope a new project to put here.'
                ></ProjectCard>
                </div>
            )
        }else if (this.state.activeTab === 2) {
            return(
                <div className='projects-grid'>
                <ProjectCard
                    langues='Python' 
                    url='url(https://i.pinimg.com/originals/74/99/53/7499532401420bdd8e549814bab51587.jpg) center / cover'
                    text='Python project #1. I need to start coding more in python so I have projects to show.'
                ></ProjectCard>
                <ProjectCard
                    langues='Python' 
                    url='url(https://i.pinimg.com/originals/74/99/53/7499532401420bdd8e549814bab51587.jpg) center / cover'
                    text='Python project #1. I need to start coding more in python so I have projects to show.'
                ></ProjectCard>
                <ProjectCard
                    langues='Python' 
                    url='url(https://i.pinimg.com/originals/74/99/53/7499532401420bdd8e549814bab51587.jpg) center / cover'
                    text='Python project #1. I need to start coding more in python so I have projects to show.'
                ></ProjectCard>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} ripple>
                    <Tab>React</Tab>
                    <Tab>VBA</Tab>
                    <Tab>Python</Tab>
                    {/* <Tab>BI Dev</Tab> */}
                </Tabs>
                    
                    <Grid className='category-tabs'>
                        <Cell col={12}>
                            <div>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;