import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
    <div>
      <div style={{height: '200px', position: 'relative', background: '#34888C'}}>
        <Layout fixedHeader>
          <Header transparent title="DIATOT" style={{color: 'white'}}>
            <div class="center">
              <img src={logo} height="100" alt="logo" />
            </div>
              <Navigation>
                  <a href="/">Hej</a>
                  <a href="/">på</a>
                  <a href="/">dig</a>
                  <a href="/">min bror</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/">Settings</a>
                  <a href="/">Your diary</a>
                  <a href="/">Add</a>
                  <a href="Sök">Blood</a>
              </Navigation>
          </Drawer>
          <Content />
      </Layout>
      </div>
      <div className="mainButton">KNAPP</div>
    </div>
    );
  }
}

export default App;
