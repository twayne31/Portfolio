import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{
        height: '300px',
        position: 'relative'
      }}>
        <Layout
          style={{
          background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'
        }}>
          <Header
            transparent
            title="TWH Portfolio"
            style={{
            color: 'white'
          }}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutMe">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="TWH Portfolio">
            <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    

    );
  }
}

export default App;
