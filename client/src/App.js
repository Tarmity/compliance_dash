import React from 'react';
import './App.css';
import Sidebar from './Components/SideBar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './Pages/Reports'
import ComplianceRegister from './Pages/ComplianceRegister';
import ContractsAgreeMentsSupplies from './Pages/ContractsAgreeMentsSupplies';
// import Button from '@material-ui/core/Button'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/compliance" exact component={ComplianceRegister} />
        <Route path="/dashboard/cas" exact component={ContractsAgreeMentsSupplies} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
      </Switch>
    </Router>
  );
}

export default App;
