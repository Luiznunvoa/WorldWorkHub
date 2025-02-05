import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AppProvider } from "./context/contextProvider";
import { useAppContext } from "./context/context";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { List } from "./pages/list";

/**
 * ProtectedRoute component to guard routes that require authentication.
 * Redirects to the login page if the user is not authenticated.
 */
const ProtectedRoutes = () => {
  const { token } = useAppContext();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes> 
            { /* Public Routes */ }
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />

            { /* Protected Routes */ }
            <Route element={<ProtectedRoutes />}>
              <Route path="/list" element={<List />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}
