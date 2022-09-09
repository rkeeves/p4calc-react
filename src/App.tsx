import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Home from './pages/home/Home';
import SettingsOverview from './pages/settings/SettingsOverview';
import ItemDetails from './pages/items/ItemDetails';
import LedgerTableView from './pages/ledgers/LedgerTableView';
import FinancesView from './pages/finances/FinancesView';
import { AppNavbar } from './components';
import NotFound from './pages/notfound/NotFound';
import { Col, Row } from 'react-bootstrap';
import LogisticsView from './pages/logistics/LogisticsView';
import RecipesView from './pages/recipes/RecipesView';

const App: React.FC = () => {
  return (
    <Router>
      <Container id="base" fluid>
        <AppNavbar />
        <Row>
          <Col>
            <Routes>
              <Route path="/"
                element={<Home />} />
              <Route path="/setting"
                element={<SettingsOverview />} />
              <Route path="/item/:id"
                element={<ItemDetails />} />
              <Route path="/ledger"
                element={<LedgerTableView />} />
              <Route path="/finances"
                element={<FinancesView />} />
              <Route path="/recipes"
                element={<RecipesView />} />
              <Route path="/logistics"
                element={<LogisticsView />} />
              <Route path="*"
                element={<NotFound />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
