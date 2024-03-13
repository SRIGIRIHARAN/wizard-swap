import React from "react";
import "./SideBar.css";
import { Nav } from "react-bootstrap";

const SideBar = () => {
  return (
    <div className="side-bar">
      <Nav className="navigation">
        <Nav.Link to="/">
          <i class="bi bi-house"></i>Home
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-graph-up"></i>Liquidity
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-arrow-left-right"></i>Swap
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-stack"></i>Staking & Farming
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-box"></i>Surup Pools
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-people"></i>Referral
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-ticket-detailed"></i>Lottery
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-arrow-repeat"></i>Bridge
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-file-earmark"></i>Docs
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-rocket-takeoff"></i>Launchpad
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-badge-vo"></i>Voting
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-eye"></i>Overview
        </Nav.Link>
        <Nav.Link to="/">
          <i class="bi bi-three-dots-vertical"></i>More
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBar;
