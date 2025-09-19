import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar, Send, Settings, Bell, User, Plus, Mail,
  Users,
  BarChart2,
  LayoutDashboard,
  FileText,
} from "lucide-react";
import "./ScheduleViewNew.css";

export default function ScheduleView() {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("https://recrailer-2-0.onrender.com/api/scheduled", {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        const data = await res.json();
        setMails(data);
      } catch (err) {
        console.error("Error fetching mails:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMails();
  }, []);

  return (
    <div className="sv-dashboard">
      <aside className="sv-sidebar">
        <button
          className="sv-new-campaign"
          onClick={() => navigate("/compose")}
        >
          <Plus size={16} /> New Campaign
        </button>
        <nav className="sv-sidebar-menu">
          <a className="sv-menu-item" onClick={() => navigate("/dashboard")}>
            <LayoutDashboard size={16} /> Dashboard
          </a>
          <a className="sv-menu-item" onClick={() => navigate("/compose")}>
            <FileText size={16} /> Campaigns <span className="sv-badge">12</span>
          </a>
          <a className="sv-menu-item sv-active" onClick={() => navigate("/scheduled")}>
            <Send size={16} /> Sent <span className="sv-badge">156</span>
          </a>
          <a className="sv-menu-item" onClick={() => navigate("/contacts")}>
            <Users size={16} /> Contacts <span className="sv-badge">2340</span>
          </a>
          <a className="sv-menu-item" onClick={() => navigate("/settings")}>
            <Settings size={16} /> Settings
          </a>
        </nav>

      </aside>
      <main className="sv-main">
        <div className="sv-topbar">
          <div className="sv-title">Scheduled Emails</div>
          <div className="sv-icons">
            <Bell size={18} />
            <User size={18} />
          </div>
        </div>
        <div className="sv-list-container">
          {loading ? (
            <p className="sv-loading">Loading...</p>
          ) : mails.length === 0 ? (
            <p className="sv-empty">No emails found.</p>
          ) : (
            mails.map((mail) => (
              <div className="sv-mail-card" key={mail._id || mail.to + mail.subject}>
                <div className="sv-mail-text">
                  <p className="sv-mail-to">To: {mail.to}</p>
                  <p className="sv-mail-subject">Subject: {mail.subject}</p>
                </div>
                <span
                  className={`sv-mail-status ${mail.status === "sent" ? "sv-sent" : "sv-scheduled"
                    }`}
                >
                  {mail.status}
                </span>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
