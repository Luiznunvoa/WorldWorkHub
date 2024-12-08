import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
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
