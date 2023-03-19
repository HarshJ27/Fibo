import React from "react";
import {
  Dashboard as DashboardIcon,
  Group as GroupIcon,
  AccountCircle as AccountCircleIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ArticleIcon from "@mui/icons-material/Article";
import LogoutIcon from "@mui/icons-material/Logout";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import AddIcon from "@mui/icons-material/Add";
import Chart from "../Assets/chart.png"
import RightImg from "../Assets/Frame 47326.png"
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import "./MainDash.css"
import Cook from "../Assets/TFCC stickers copy_page-0002 - Edited.png"
import Fibo from "../Assets/Fibo logo.png"

const MainLayout = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="company-logo">
          <img src={Fibo} alt="Company Logo" />
          <h5>
            FI<span>T</span>NESS
          </h5>
        </div>
        <div className="menu-items">
          <div className="menu-item">
            <DashboardIcon />
            Dashboard
          </div>
          <div className="menu-item">
            <GroupIcon />
            Members
          </div>
          <div className="menu-item">
            <FitnessCenterIcon />
            Exercise Plans
          </div>
          <div className="menu-item">
            <ArticleIcon />
            Diet Plans
          </div>
          <div className="menu-item">
            <AccountCircleIcon />
            Profile
          </div>
          <div className="menu-item">
            <LogoutIcon />
            Logout
          </div>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="dashboard-title">
            Dashboard
            <p>Welcome Back, John Doe</p>
          </div>
          {/* <div className="welcome-message">Welcome back, John Doe!</div> */}
          <div className="header-icons">
            <NotificationsIcon style={{ color: "white" }} />
            <img src={Cook} alt="Avatar" className="avatar" />
          </div>
        </div>
        {/* Add your dashboard content here */}
        <div className="middle-body">
          <div className="main-body">
            <div className="left-body">
              <div className="costs">
                <div className="cost-main">
                  <DownloadIcon
                    style={{
                      color: "white",
                      backgroundColor: "#FF8D24",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="currency">
                    $48,000.00
                    <p>Total Revenue</p>
                  </div>
                </div>
                <div className="cost-main">
                  <FileUploadIcon
                    style={{
                      color: "white",
                      backgroundColor: "#FF8D24",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="currency">
                    $48,000.00
                    <p>Total Revenue</p>
                  </div>
                </div>
              </div>
              <div className="table-metrics">
                <h5>Members</h5>
                <img src={Chart} alt="chartImg" />
              </div>
            </div>
            <div className="right-body">
              <div className="app-info">
                <img src={RightImg} alt="rightImg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="cards-container">
            <h5>Quick Actions</h5>
            <div className="cards">
              <div className="card">
                <AddIcon className="icon" />
                <div className="text">Add People</div>
              </div>
              <div className="card">
                <PersonIcon className="icon" />
                <div className="text">manage Staffs</div>
              </div>
              <div className="card">
                <SettingsIcon className="icon" />
                <div className="text">Set Up Gym Branch</div>
              </div>
              <div className="card">
                <PaidIcon className="icon" />
                <div className="text">Manage Subscription Plans</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
