/* Pi-hole: A black hole for Internet advertisements
*  (c) 2017 Pi-hole, LLC (https://pi-hole.net)
*  Network-wide ad blocking via your own hardware.
*
*  Admin Web Interface
*  Main container of the web interface (performs main routing)
*
*  This file is copyright under the latest version of the EUPL.
*  Please see LICENSE file for your rights under this license. */


import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Dashboard from '../views/Dashboard';
import QueryLog from '../components/QueryLog';
import Whitelist from "../views/Whitelist";
import Blacklist from "../views/Blacklist";
import Wildlist from "../views/Wildlist";

export default props => (
  <div className="app">
    <Header />
    <div className="app-body">
      <Sidebar {...props}/>
      <main className="main">
        <Breadcrumb />
        <div className="container-fluid">
          <Switch>
            <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
            <Redirect exact from="/" to="/dashboard"/>
            <Route path="/query-log" name="Query Log" component={QueryLog}/>
            <Route path="/whitelist" name="Whitelist" component={Whitelist}/>
            <Route path="/blacklist" name="Blacklist" component={Blacklist}/>
            <Route path="/wildlist" name="Wildlist" component={Wildlist}/>
          </Switch>
        </div>
      </main>
      <Aside />
    </div>
    <Footer />
  </div>
);
