/* Pi-hole: A black hole for Internet advertisements
*  (c) 2017 Pi-hole, LLC (https://pi-hole.net)
*  Network-wide ad blocking via your own hardware.
*
*  Admin Web Interface
*  Header component
*
*  This file is copyright under the latest version of the EUPL.
*  Please see LICENSE file for your rights under this license. */


import React from 'react';

//const sidebarToggle = (e) => {
//  e.preventDefault();
//  document.body.classList.toggle('sidebar-hidden');
//};

const sidebarMinimize = (e) => {
  e.preventDefault();
  document.body.classList.toggle('sidebar-minimized');
};

const mobileSidebarToggle = (e) => {
  e.preventDefault();
  document.body.classList.toggle('sidebar-mobile-show');
};

//const asideToggle = (e) => {
//  e.preventDefault();
//  document.body.classList.toggle('aside-menu-hidden');
//};

export default () => (
  <header className="app-header navbar">
    <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" onClick={mobileSidebarToggle} type="button">&#9776;</button>
    <a className="navbar-brand" href="https://pi-hole.net">
      <span style={{color: "white", paddingLeft: "45px", lineHeight: "40px"}}>
        Pi-<b>hole</b>
      </span>
    </a>
    <ul className="nav navbar-nav d-md-down-none mr-auto">
      <li className="nav-item">
        <button className="nav-link navbar-toggler sidebar-toggler" type="button" onClick={sidebarMinimize}>&#9776;</button>
      </li>
    </ul>
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        <li className="dropdown user user-menu userBox"/>
      </ul>
    </div>
  </header>
);
