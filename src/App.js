import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import './App.css';
import './Components/LandingPage';

class App extends Component{
    render(){
        return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="The Magnificant G">
                    <Navigation>
                        <Link className='tabs-color' to='/My-Portfolio'>Home</Link>
                        <Link className='tabs-color' to="/Resume">Resume</Link>
                        <Link className='tabs-color' to="/Projects">Projects</Link>
                        <Link className='tabs-color' to="/Contact" >Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to='/My-Portfolio'>Home</Link>
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
