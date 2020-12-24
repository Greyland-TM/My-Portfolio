import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Title" scroll>
                <Navigation>
                    <Link to='/portfoliO-app'>Home</Link>
                    <Link to="/AboutMe">About Me</Link>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to='/portfoliO-app'>Home</Link>
                    <Link to="/About Me">About Me</Link>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
        <p>Hello World!</p>
    </div>
    )
  }
}

export default App;
