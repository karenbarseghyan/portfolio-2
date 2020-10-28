import logo from './logo.svg';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '350px', position: 'relative'}}>
    <Layout style={{background: '#4267B2'}}>
        <Header transparent title="Karen Barseghyan" style={{color: 'orange'}}>
            <Navigation>
                <Link to="/Personal">Personal</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Experience">Experience</Link>
                <Link to="/Skills">Skills</Link>
            </Navigation>
        </Header>
        <Drawer title="Karen Barseghyan">
            <Navigation>
                <Link to="/Personal">Personal</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Experience">Experience</Link>
                <Link to="/Skills">Skills</Link>                
            </Navigation>
        </Drawer>
        <Content>
            <Main />
        </Content>
    </Layout>
    <div style = {{textAlign: 'center'}}> 
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    
</div>
    
  );
}

export default App;

