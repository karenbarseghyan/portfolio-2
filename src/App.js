import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '360px', position: 'relative'}}>
    <Layout className = "layout-color">
        <Header transparent title="CURRICULUM VITAE" className = "header-color">
            <Navigation >
                <Link to="/">Home</Link>
                <Link to="/Personal">Personal</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Experience">Experience</Link>
                <Link to="/Skills">Skills</Link>
            </Navigation>
        </Header>
        <Drawer title="CURRICULUM VITAE" >
            <Navigation className = "layout-color">
                <Link to="/">Home</Link>
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
</div>
    
  );
}

export default App;

