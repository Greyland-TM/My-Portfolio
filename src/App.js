import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import './App.css';
import './Components/LandingPage';
import LandingPage from './Components/LandingPage';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {activePage: 0}
    }

    togglePage(){
        if (this.state.activePage === 0)
            return(
                <LandingPage></LandingPage>
            )
    }

    render(){
        return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="The Magnificant G" scroll>
                    <Navigation>
                        <Link to='/My-Portfolio'>Home</Link>
                        {/* <Link to="/AboutMe">About Me</Link> */}
                        <Link to="/Resume" activePage={1}>Resume</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to='/portfolio-app'>Home</Link>
                        {/* <Link to="/About Me">About Me</Link> */}
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
        </div>
    )
  }
}

export default App;
