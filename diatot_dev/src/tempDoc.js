<div>
{/* using CommonJS modules*/}
{/*var Media = require("react-media");
<div className="topBar">
style={{height: '100px', position: 'fixedHeader', background: '#FFFFF'}}  */}
    <div className="topBar" >
      <Layout fixedHeader>
        <Header transparent style={{color: 'white'}}>
          <div class="center">
          {/*  <div class="topBar"></div> */}
              <img src={logo} height="100" alt="logo" />
          </div>
              <Navigation>
                <a href="/">Help</a>
              </Navigation>
          </Header>
        <Drawer title="Settings">
            <Navigation>
                <a href="/">Settings</a>
                <a href="/">Your diary</a>
                <a href="/">Add</a>
                <a href="Sök">Blood</a>
              </Navigation>
          </Drawer>
        <Content style={{backgroundColor: "#FAFAFB"}}>
          <div class="bloodgraph">
            <img className="graph" src={bloodglucose} alt="bloodglucose" />
          </div>
          <div className="mainButton">New log +</div>
          <div className="center">
          <div className=""><h4>Control Glucose</h4></div>
            <div className="smallButtons">CGM</div>
            <div className="smallButtons">BG
                <img className ="blood_drop" src={blood_drop} alt="blood_drop" />
            </div>
          </div>
        </Content>
      </Layout>
  </div>
</div>
