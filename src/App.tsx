// src/App.tsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import LoginToEmail from "./pages/LoginToEmail";
import UserLoginTest from "./pages/UserLoginTest";

function App() {
  const [user, setUser] = useState<any>(null);

  const handleLogin = (username: string, password: string) => {
    console.log("Login attempt:", username, password);
    const testUser = {
      username,
      loginTime: new Date().toISOString(),
      loginMethod: "standard",
      id: Math.random().toString(36).substr(2, 9),
      email: `${username}@test.com`,
      fullName: "테스트 사용자",
      lastLoginIP: "127.0.0.1",
      userAgent: navigator.userAgent,
      roles: ["user"],
    };
    setUser(testUser);
  };

  const handleGoogleLogin = () => {
    console.log("Google login attempt");
    const testGoogleUser = {
      id: "google-" + Math.random().toString(36).substr(2, 9),
      username: "google_user",
      email: "google_user@gmail.com",
      fullName: "Google Test User",
      loginTime: new Date().toISOString(),
      loginMethod: "Google",
    };
    setUser(testGoogleUser);
  };

  const handleEmailLogin = () => {
    console.log("Email login attempt");
  };

  const handleForgotCredentials = () => {
    console.log("Forgot credentials");
  };

  const handleSignUp = () => {
    console.log("Sign up");
  };

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route
              path="/login"
              element={
                <Login
                  onLogin={handleLogin}
                  onGoogleLogin={handleGoogleLogin}
                  onEmailLogin={handleEmailLogin}
                  onForgotCredentials={handleForgotCredentials}
                  onSignUp={handleSignUp}
                />
              }
            />
            <Route path="/loginToEmail" element={<LoginToEmail />} />
            <Route
              path="/UserLoginTest"
              element={
                user ? (
                  <UserLoginTest user={user} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </main>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
