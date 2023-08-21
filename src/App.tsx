import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Affix, Button, Layout } from 'antd';
import { GlobalFooter } from './components/GlobalFooter';
import { GlobalHeader } from './components/GlobalHeader';
import { SideMenu } from './components/SideMenu';
import { Home } from './components/Home';
import ScrollToHashElement from './components/ScrollToHashElement';
import { About } from './components/About';
import { Contact } from './components/Contact';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#E6F4FF',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  // lineHeight: '120px',
  backgroundColor: '#e5e5e5',
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
  backgroundColor: '#E6F4FF',
};

const App = () => {
  const currentPage = useLocation();
  // console.log('URL: ', currentPage);

  return (
    <Layout>
      <ScrollToHashElement />
      <section id="top">
        <Header style={headerStyle}>
          <GlobalHeader />
        </Header>
      </section>
      <Layout hasSider>
        {currentPage.pathname === '/' ? (
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
        ) : (
          <></>
        )}
        <Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/astronaut/:id" element={<div></div>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
      </Layout>
      <Footer style={footerStyle}>
        <GlobalFooter />
      </Footer>
    </Layout>
  );
};

export default App;
