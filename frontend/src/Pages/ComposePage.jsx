import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeading, faPaperPlane, faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { LayoutDashboard, FileText, Calendar, Send, Users, Settings, ArrowLeft } from "lucide-react";
import "./ComposeNew.css";

export default function ComposePage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  const [enableSchedule, setEnableSchedule] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("email");
    if (!token) navigate("/signup");
    if (userEmail) setValue("from", userEmail);
  }, [navigate, setValue]);

  const onSubmit = async (formData) => {
    if (!enableSchedule) delete formData.scheduledTime;
    const response = await fetch("https://recrailer-2-0.onrender.com/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log("Compose result:", result);
  };

  return (
    <div className="cn-page-layout">
      <aside className="cn-sidebar">
        <button className="cn-new-campaign" onClick={() => navigate("/dashboard")}>
          <ArrowLeft size={16} /> Back To Dashboard
        </button>
        <h1 className="cn-sidebar-title">Recrailer</h1>
        <nav className="cn-sidebar-menu">
          <a className="cn-menu-item" onClick={() => navigate("/dashboard")}>
            <LayoutDashboard size={16} /> Dashboard
          </a>
          <a className="cn-menu-item cn-active" onClick={() => navigate("/compose")}>
            <FileText size={16} /> Campaigns
          </a>
          <a className="sv-menu-item" onClick={() => navigate("/scheduled")}>
            <Send size={16} /> Sent <span className="sv-badge">156</span>
          </a>
          <a className="cn-menu-item" onClick={() => navigate("/contacts")}>
            <Users size={16} /> Contacts
          </a>
          <a className="cn-menu-item" onClick={() => navigate("/settings")}>
            <Settings size={16} /> Settings
          </a>
        </nav>
      </aside>

      <main className="cn-main">
        <h2 className="cn-compose-heading">Compose New Email</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="cn-compose-form">
          <div className="cn-input-card">
            <label className="cn-input-heading">From</label>
            <div className="cn-input-wrapper">
              <FontAwesomeIcon icon={faUser} className="cn-input-icon" />
              <input
                {...register("from", { required: "Sender email is required" })}
                type="email"
                readOnly
              />
            </div>
            {errors.from && <span className="cn-error-text">{errors.from.message}</span>}
          </div>

          <div className="cn-input-card">
            <label className="cn-input-heading">To</label>
            <div className="cn-input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="cn-input-icon" />
              <input
                {...register("to", { required: "Recipient is required" })}
                placeholder="Recipient Emails (comma or space separated)"
                type="text"
              />
            </div>
            {errors.to && <span className="cn-error-text">{errors.to.message}</span>}
          </div>

          <div className="cn-input-card">
            <label className="cn-input-heading">Subject</label>
            <div className="cn-input-wrapper">
              <FontAwesomeIcon icon={faHeading} className="cn-input-icon" />
              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Email Subject"
                type="text"
              />
            </div>
            {errors.subject && <span className="cn-error-text">{errors.subject.message}</span>}
          </div>

          <div className="cn-input-card">
            <label className="cn-input-heading">Message</label>
            <textarea
              {...register("message", { required: "Message body is required" })}
              placeholder="Write your message here..."
              className="cn-message-box"
              rows="8"
            />
            {errors.message && <span className="cn-error-text">{errors.message.message}</span>}
          </div>

          <div className="cn-input-card">
            <label className="cn-input-heading">
              <input
                type="checkbox"
                checked={enableSchedule}
                onChange={(e) => setEnableSchedule(e.target.checked)}
              />{" "}
              Schedule this email
            </label>
            {enableSchedule && (
              <div className="cn-input-wrapper">
                <FontAwesomeIcon icon={faCalendarAlt} className="cn-input-icon" />
                <input {...register("scheduledTime")} type="datetime-local" />
              </div>
            )}
          </div>

          <button type="submit" className="cn-submit-btn">
            <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: "8px" }} />
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </main>
    </div>
  );
}
