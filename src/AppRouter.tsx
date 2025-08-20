import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';
import ServicosPage from './pages/ServicosPage';
import SobrePage from './pages/SobrePage';
import PortfolioPage from './pages/PortfolioPage';
import ContatoPage from './pages/ContatoPage';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/sobre-nos" element={<SobrePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
