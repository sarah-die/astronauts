import './App.css';

import { useQuery } from '@tanstack/react-query';
import { getAll } from './services/astronauts';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Affix, Button, Layout } from 'antd';
import { MainFooter } from './components/MainFooter';
import { HeaderElement } from './components/HeaderElement';
import { SideMenu } from './components/SideMenu';
import { Home } from './components/Home';
import ScrollToHashElement from './components/ScrollToHashElement';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#FFFFFF',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#FFFFFF',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const App = () => {
  const queryResult = useQuery(['astronauts'], getAll);
  console.log('queryResult:', queryResult);

  const astronauts = queryResult.data || [];
  console.log('astronauts: ', astronauts);

  return (
    <Router>
      <Layout>
        <ScrollToHashElement />
        <section id="top">
          <Header style={headerStyle}>
            <HeaderElement />
          </Header>
        </section>
        <Layout hasSider>
          <Sider style={siderStyle}>
            <Affix offsetTop={30}>
              <SideMenu />
            </Affix>
            <Affix offsetTop={300}>
              <Button>
                <Link to="/#top">Top</Link>
              </Button>
            </Affix>
          </Sider>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/astronaut/:id" element={<div></div>} /> */}
              <Route path="/about" element={<div>about</div>} />
              <Route path="/contact" element={<div>contact</div>} />
            </Routes>
          </Content>
        </Layout>
        <Footer style={footerStyle}>
          <MainFooter />
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
