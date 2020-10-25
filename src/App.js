import logo from './logo.svg';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

function App() {
  return (
    <div style={{height: '350px', position: 'relative'}}>
    <Layout style={{background: '#4267B2'}}>
        <Header transparent title="Karen Barseghyan" style={{color: 'orange'}}>
            <Navigation>
                <a href="#">Personal</a>
                <a href="#">Education</a>
                <a href="#">Experience</a>
                <a href="#">Skills</a>
            </Navigation>
        </Header>
        <Drawer title="Karen Barseghyan">
            <Navigation>
                <a href="#">Personal</a>
                <a href="#">Education</a>
                <a href="#">Experience</a>
                <a href="#">Skills</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
    <div style = {{textAlign: 'center'}}> 
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    
</div>
    
  );
}

export default App;

