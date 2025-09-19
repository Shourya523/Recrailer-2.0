import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Users,
  Calendar,
  BarChart2,
  LayoutDashboard,
  Send,
  FileText,
  Settings,
  User,
  Bell,
  Plus,
} from "lucide-react";
import "./DashboardNew.css";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchMessage = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://recrailer-2-0.onrender.com/api/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!res.ok) {
        throw new Error("Unauthorized or server error");
      }

      const data = await res.json();
      setMessage(data.message);
      setError("");
    } catch (err) {
      setError(err.message);
      setMessage("");
    }
  };

  return (
    <div className="dn-dashboard">
      <aside className="dn-sidebar">
        <button
          className="dn-new-campaign"
          onClick={() => navigate("/compose")}
        >
          <Plus size={16} /> New Campaign
        </button>

        <h1 className="dn-sidebar-title">Recrailer</h1>

        <nav className="dn-sidebar-menu">
          <a className="dn-menu-item dn-active" onClick={() => navigate("/")}>
            <LayoutDashboard size={16} /> Dashboard
          </a>
          <a
            className="dn-menu-item"
            onClick={() => navigate("/compose")}
          >
            <FileText size={16} /> Campaigns <span className="dn-badge">12</span>
          </a>
          <a className="sv-menu-item" onClick={() => navigate("/scheduled")}>
            <Send size={16} /> Sent <span className="sv-badge">156</span>
          </a>
          <a className="dn-menu-item" onClick={() => navigate("/contacts")}>
            <Users size={16} /> Contacts <span className="dn-badge">2340</span>
          </a>
          <a className="dn-menu-item" onClick={() => navigate("/settings")}>
            <Settings size={16} /> Settings
          </a>
        </nav>
      </aside>
      <main className="dn-main">
        <div className="dn-topbar">
          <div className="Recrailer-dn">Recrailer</div>
          <div className="dn-icon-wrapper">
            <Bell size={18} className="dn-icon" />
            <User size={18} className="dn-icon" />
          </div>
        </div>
        <div className="dn-stats-grid">
          <div className="dn-stat-card">
            <div className="dn-stat-header">
              <span>Total Emails Sent</span>
              <Mail size={16} className="dn-icon-orange" />
            </div>
            <h2>12,428</h2>
            <span className="dn-positive">+12.5% from last month</span>
          </div>

          <div className="dn-stat-card">
            <div className="dn-stat-header">
              <span>Active Subscribers</span>
              <Users size={16} className="dn-icon-orange" />
            </div>
            <h2>2,340</h2>
            <span className="dn-positive">+8.2% from last month</span>
          </div>

          <div className="dn-stat-card">
            <div className="dn-stat-header">
              <span>Scheduled Campaigns</span>
              <Calendar size={16} className="dn-icon-orange" />
            </div>
            <h2>8</h2>
            <span className="dn-positive">+2 from last month</span>
          </div>

          <div className="dn-stat-card">
            <div className="dn-stat-header">
              <span>Open Rate</span>
              <BarChart2 size={16} className="dn-icon-orange" />
            </div>
            <h2>24.8%</h2>
            <span className="dn-positive">+3.1% from last month</span>
          </div>
        </div>
        <div className="dn-upcoming">
          <h3>Upcoming Campaigns</h3>
          <div className="dn-campaign-card">
            <p className="dn-campaign-title">Weekly Newsletter - Product Updates</p>
            <p className="dn-campaign-to">To: newsletter@subscribers.com</p>
            <p className="dn-campaign-time">Today at 2:00 PM</p>
            <span className="dn-status-scheduled">scheduled</span>
          </div>

          <div className="dn-campaign-card">
            <p className="dn-campaign-title">Welcome Series - Day 3</p>
            <p className="dn-campaign-to">To: new@users.com</p>
            <p className="dn-campaign-time">Tomorrow at 10:00 AM</p>
            <span className="dn-status-scheduled">scheduled</span>
          </div>
        </div>
      </main>
    </div>
  );
}
