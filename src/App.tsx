import './App.css';
import { useQuery } from '@tanstack/react-query';
import { getAll } from './services/astronauts';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Affix, Button, Layout } from 'antd';
import { MainFooter } from './components/MainFooter';
import { HeaderElement } from './components/HeaderElement';
import { SideMenu } from './components/SideMenu';
import { Home } from './components/Home';
import ScrollToHashElement from './components/ScrollToHashElement';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { activePageState } from './recoilState/atom';
import { About } from './components/About';

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
  const queryResult = useQuery({
    queryKey: ['astronauts'],
    queryFn: getAll,
  });
  const astronauts = queryResult.data || [];
  console.log('astronauts: ', astronauts);

  const setActivePage = useSetRecoilState(activePageState);

  const currentPage = useLocation();
  // console.log('URL: ', currentPage);

  useEffect(() => {
    // ToDo
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setActivePage(currentPage);
  }, [currentPage]);

  return (
    <Layout>
      <ScrollToHashElement />
      <section id="top">
        <Header style={headerStyle}>
          <HeaderElement />
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
            <Route path="/contact" element={<div>contact</div>} />
          </Routes>
        </Content>
      </Layout>
      <Footer style={footerStyle}>
        <MainFooter />
      </Footer>
    </Layout>
  );
};

export default App;
