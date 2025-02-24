import AuthenticationStyleWrapper from "./Authentication.style";
import AuthRightSection from "./AuthRightSection";
import AuthFormWrapper from "./AuthFormWrapper";

import GoogleIcon from "../../assets/images/auth-and-utility/google.svg";
import FacebookIcon from "../../assets/images/auth-and-utility/facebook.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../Components/ScrollAnimate";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Signin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    const formData = {
      user_type: userType, // Payload remains 'client' for Owner/Manager
      email: email.trim(),
      password: password.trim(),
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Login failed");
      }

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user_type", data.user_type || "");

      if (data.user_type === "client") {
        navigate("/client-dashboard");
      } else if (data.user_type === "locum") {
        navigate("/locum-dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper>
        <ScrollAnimate delay={200}>
          <h2>Hi there!</h2>
          <h4 className="dm-sans">Welcome to QuickLocum 👋</h4>
        </ScrollAnimate>
        <form onSubmit={handleSubmit} id="commentForm">
          {/* User Type Selection */}
          <ScrollAnimate delay={200}>
            <div className="form-group flex flex-col">
              <label>
                Account Type
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full p-3 border rounded-md bg-white mt-2"
                required
              >
                <option value="" disabled>Select your role</option>
                <option value="locum">Healthcare Professional</option>
                <option value="client">Owner/Manager</option>
              </select>
            </div>
          </ScrollAnimate>


          <ScrollAnimate delay={250}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. example@mail.com"
                required
                disabled={!userType} // Disable until user type is selected
                className={`${!userType ? 'bg-gray-100 opacity-75' : ''}`}
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={300}>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={!userType} // Disable until user type is selected
                className={`${!userType ? 'bg-gray-100 opacity-75' : ''}`}
              />
            </div>
          </ScrollAnimate>

          {/* Rest of the form elements */}
          <ScrollAnimate delay={350}>
            <button
              type="submit"
              className="form-primary-btn"
              disabled={!userType} // Optional: disable button until selection
            >
              Login
            </button>
          </ScrollAnimate>

          <ScrollAnimate delay={400}>
            <div className="or-section">
              <p className="mb-0">or</p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={450}>
            <button
              className="secondary-btn"
              disabled={!userType} // Optional: disable social login until selection
            >
              <img src={GoogleIcon} alt="icon" /> Log in with Google
            </button>
          </ScrollAnimate>

          <ScrollAnimate delay={550}>
            <NavLink to="/forgot-password" className="auth-link">
              Forgot my password
            </NavLink>
            <p className="mt-3">
              Don’t have an account ?{" "}
              <NavLink to="/sign-up">Register now !</NavLink>
            </p>
            <p className="mb-0">
              By signing in, you agree to our{" "}
              <NavLink to="/terms">Terms</NavLink> &{" "}
              <NavLink to="/privacy-policy">Privacy Policy.</NavLink>
            </p>
          </ScrollAnimate>
        </form>
      </AuthFormWrapper>

      <AuthRightSection />
    </AuthenticationStyleWrapper>
  );
};

export default Signin;
