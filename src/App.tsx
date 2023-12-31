import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider, Layout, theme } from 'antd';
import { GlobalFooter } from 'components/GlobalFooter';
import { GlobalHeader } from 'components/GlobalHeader';
import { SideMenu } from 'components/SideMenu';
import { Home } from 'components/Home';
import ScrollToHashElement from 'components/ScrollToHashElement';
import { About } from 'components/About';
import { Contact } from 'components/Contact';
import { useRecoilValue } from 'recoil';
import { darkModeState, languageState } from 'recoilState/atom';
import { useRef } from 'react';
import { useIsVisible } from 'hooks/useIsVisible';
import de from 'antd/locale/de_DE';
import en from 'antd/locale/en_US';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 90,
  paddingInline: 50,
  position: 'sticky',
  top: 0,
  width: '100%',
  zIndex: 999,
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  position: 'fixed',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 64,
};

const App = () => {
  const darkMode = useRecoilValue(darkModeState);
  const currentPage = useLocation();
  const footerRef = useRef<HTMLElement>(null);
  const footerIsVisible = useIsVisible(footerRef);
  const language = useRecoilValue(languageState);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
          Layout: {
            colorBgHeader: darkMode ? '#141414' : '#FFFFFF',
          },
        },
      }}
      locale={language === 'en' ? en : de}
    >
      <Layout>
        <ScrollToHashElement />
        <Header style={headerStyle}>
          <GlobalHeader />
        </Header>
        <Layout hasSider>
          {currentPage.pathname === '/' ? (
            <Sider
              style={{
                ...siderStyle,
                height: footerIsVisible
                  ? 'calc(100vh - 90px - 64px)'
                  : 'calc(100vh - 90px)',
              }}
            >
              <SideMenu />
            </Sider>
          ) : (
            <></>
          )}
          <Content
            style={{
              ...contentStyle,
              marginLeft: currentPage.pathname === '/' ? 200 : 0,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>
        </Layout>
        <Footer style={footerStyle} ref={footerRef}>
          <GlobalFooter />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
