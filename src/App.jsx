import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home';

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}