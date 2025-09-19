import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function LogIn() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://recrailer-2-0.onrender.com/api/log-in", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem("token", result.accessToken);
                localStorage.setItem("email", result.email);
                navigate("/dashboard");
            } else {
                alert(result.message || "Invalid credentials, try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="page-layout">
            <div className="left-panel">
                <div className="dashboard-info">
                    <h2 className="dashboard-title">Welcome Back</h2>
                    <p className="dashboard-subtitle">
                        Manage your account and track scheduled email campaigns
                    </p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <p className="stat-label">Total Logins</p>
                            <p className="stat-value">1,482</p>
                            <p className="stat-change">+5.1% this month</p>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">Active Users</p>
                            <p className="stat-value">890</p>
                            <p className="stat-change">+3.7% from last month</p>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">Failed Logins</p>
                            <p className="stat-value">12</p>
                            <p className="stat-change" style={{ color: "#ff5555" }}>
                                -1.2% from last month
                            </p>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">Security Score</p>
                            <p className="stat-value">92%</p>
                            <p className="stat-change">+4.5% from last month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-panel">
                <p className="right-panel-heading">Log In to Recrailer</p>
                <div className="username-box">
                    <p className="username-box-text">Sign In</p>

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
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                                })}
                                placeholder="Email"
                                type="email"
                                className="userName"
                            />
                        </div>
                        {errors.email && <span>{errors.email.message}</span>}
                        <div className="input-heading">Password</div>
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
                        {errors.loginPassword && <span>{errors.loginPassword.message}</span>}
                        <button type="submit" className="submit-btn">
                            {isSubmitting ? "Signing In..." : "Sign In"}
                        </button>
                    </form>
                    <p className="switch-auth">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="switch-link">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
