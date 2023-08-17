import './App.css';

import { useQuery } from '@tanstack/react-query';
import { getAll } from './services/astronauts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
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
  backgroundColor: '#3ba0e9',
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
        <Header style={headerStyle}>Header</Header>
        <Layout hasSider>
          <Sider style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<div>home</div>} />
              {/* <Route path="/astronaut/:id" element={<div></div>} /> */}
              <Route path="/about" element={<div>about</div>} />
              <Route path="/contact" element={<div>contact</div>} />
            </Routes>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Router>
  );
};

export default App;
