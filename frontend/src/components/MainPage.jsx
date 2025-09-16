import './MainPage.css'
import { useNavigate } from 'react-router-dom'




function MainPage() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login'); // redirect to /login
  }
  const handleSignUpClick = () => {
    navigate('/signup'); // redirect to /login
  }


  return (
    <>
      <div className="registerPage-body">
        <div className="page-name"><h1>Recrailer</h1></div>
        <div className="recrail-motto">Gmail. Scheduled. Sent</div>
        <div className="google-login">
          <button type="button" onClick={handleLoginClick} className="login">
            Log In
          </button>
          <button type="button" onClick={handleSignUpClick} className="signup">
            Sign Up
          </button>
        </div>
        <div className="dashboard-preview">
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="circle">1</div>
            <div className="content">
              <h3>Login with Gmail</h3>
              <p>Connect your Google account securely and get started immediately. Your login is safe and your information is protected while accessing Recrailer’s features.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle">2</div>
            <div className="content">
              <h3>Schedule with Ease</h3>
              <p>Select the date and time for your emails, add multiple recipients if needed, and create recurring schedules effortlessly. Recrailer ensures your emails are organized and sent exactly when you want them to be.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle">3</div>
            <div className="content">
              <h3>Send Without Worries</h3>
              <p>Your emails are delivered reliably at the scheduled time. Focus on your work while Recrailer manages your communications, helping you maintain professionalism and never miss important deadlines.</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Made by Shourya 🐐</p>
        </div>
      </div>
    </>
  )
}
export default MainPage;