import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';

const Layout = ({ children }) => {
    return (
      <>
        {children}
      </>
    );
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
  )
}
