import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Calendar,
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
  const [mails, setMails] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("https://recrailer-2-0.onrender.com/api/mails", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (!res.ok) throw new Error("Unauthorized or server error");

        const data = await res.json();
        setMails(data);
        setError("");
      } catch (err) {
        setError(err.message);
        setMails([]);
      }
    };

    fetchMails();
  }, []);

  const totalSent = mails.filter(m => m.status === "sent").length;
  const scheduled = mails.filter(m => m.status === "scheduled");
  const recentScheduled = scheduled.slice(0, 3);

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
            <FileText size={16} /> Campaigns
          </a>
          <a className="dn-menu-item" onClick={() => navigate("/scheduled")}>
            <Send size={16} /> Sent
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
            <h2>{totalSent}</h2>
          </div>

          <div className="dn-stat-card">
            <div className="dn-stat-header">
              <span>Scheduled Campaigns</span>
              <Calendar size={16} className="dn-icon-orange" />
            </div>
            <h2>{scheduled.length}</h2>
          </div>
        </div>

        <div className="dn-upcoming">
          <h3>Upcoming Campaigns</h3>
          {recentScheduled.length > 0 ? (
            recentScheduled.map((mail, idx) => (
              <div className="dn-campaign-card" key={idx}>
                <p className="dn-campaign-title">{mail.subject}</p>
                <p className="dn-campaign-to">To: {mail.to}</p>
                <span className="dn-status-scheduled">{mail.status}</span>
              </div>
            ))
          ) : (
            <p>No upcoming campaigns scheduled.</p>
          )}
        </div>

        {error && <div className="dn-error">{error}</div>}
      </main>
    </div>
  );
}
