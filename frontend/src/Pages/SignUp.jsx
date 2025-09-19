import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; 
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faKey } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://recrailer-2-0.onrender.com/api/sign-up", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                navigate("/login");
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="page-layout">
            <div className="left-panel">
                <p className="left-panel-heading">Welcome to Recrailer</p>
                <div className="username-box">
                    <p className="username-box-text">Sign Up</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-heading">Email</div>
                        <div className="input-wrapper">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{ color: "rgba(255, 153, 51, .6)", fontSize: "18px" }}
                            />
                            <input
                                {...register("email", {
                                    required: { value: true, message: "Email is required" },
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                placeholder="Email"
                                type="email"
                                className="userName"
                            />
                        </div>
                        <p className="info-text">
                            Use your registered <strong>email address.</strong>
                        </p>
                        {errors.email && <span>{errors.email.message}</span>}
                        <div className="input-heading">Recrailer Password</div>
                        <div className="input-wrapper">
                            <FontAwesomeIcon
                                icon={faLock}
                                style={{ color: "rgba(255, 153, 51, .6)", fontSize: "18px" }}
                            />
                            <input
                                {...register("loginPassword", {
                                    required: { value: true, message: "Password is required" },
                                    minLength: { value: 8, message: "Minimum length is 8" },
                                })}
                                placeholder="Password"
                                type="password"
                                className="userName"
                            />
                        </div>
                        <p className="info-text">
                            Your <strong>Recrailer</strong> account login <strong>password.</strong>
                        </p>
                        {errors.loginPassword && <span>{errors.loginPassword.message}</span>}
                        <div className="input-heading">
                            <a href="https://share.google/xD8H8bZduiUvsIZYE">App Password</a>
                        </div>
                        <div className="input-wrapper">
                            <FontAwesomeIcon
                                icon={faKey}
                                style={{ color: "rgba(255, 153, 51, .6)", fontSize: "18px" }}
                            />
                            <input
                                {...register("appPassword", {
                                    required: { value: true, message: "App Password is required" },
                                    minLength: { value: 8, message: "Minimum length is 8" },
                                    setValueAs: (value) => value.replace(/\s+/g, ""),
                                })}
                                placeholder="App Password"
                                type="password"
                                className="userName"
                            />
                        </div>
                        <p className="info-text">
                             <a href="https://share.google/xD8H8bZduiUvsIZYE">Click Here For App Password</a>{" "}
                            <strong>2FA Should be on.</strong>
                        </p>
                        {errors.appPassword && <span>{errors.appPassword.message}</span>}
                        <button type="submit" className="submit-btn">
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                    <p className="switch-auth">
                        Already a user?{" "}
                        <Link to="/login" className="switch-link">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
            <div className="right-panel">
                <div className="dashboard-info">
                    <h2 className="dashboard-title">Dashboard</h2>
                    <p className="dashboard-subtitle">
                        Quickly see your email scheduling stats and upcoming campaigns
                    </p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <p className="stat-label">Total Emails Sent</p>
                            <p className="stat-value">12,428</p>
                            <p className="stat-change">+12.5% from last month</p>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">Active Subscribers</p>
                            <p className="stat-value">2,340</p>
                            <p className="stat-change">+8.2% from last month</p>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">Scheduled Campaigns</p>
                            <p className="stat-value">8</p>
                            <p className="stat-change">+2 from last month</p>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">Open Rate</p>
                            <p className="stat-value">24.8%</p>
                            <p className="stat-change">+3.1% from last month</p>
                        </div>
                    </div>

                    <div className="upcoming-campaigns">
                        <h3 className="capmaign-heading">Upcoming Campaigns</h3>
                        <div className="campaign-card">
                            <p className="campaign-title">
                                Weekly Newsletter - Product Updates
                            </p>
                            <p className="campaign-to">To: newsletter@subscribers.com</p>
                            <p className="campaign-time">Today at 2:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
