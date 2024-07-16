import { useState } from "react";
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

// User 인터페이스 정의
interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  loginTime: string;
  loginMethod: string;
  lastLoginIP?: string;
  userAgent?: string;
  roles?: string[];
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (username: string, password: string) => {
    console.log("Login attempt:", username, password);
    const testUser: User = {
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
    const testGoogleUser: User = {
      id: "google-" + Math.random().toString(36).substr(2, 9),
      username: "google_user",
      email: "google_user@gmail.com",
      fullName: "Google Test User",
      loginTime: new Date().toISOString(),
      loginMethod: "Google",
    };
    setUser(testGoogleUser);
  };

  const handleEmailLogin = (email: string) => {
    console.log("Email login attempt", email);
    // 이메일 로그인 로직 구현
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
                  onEmailLogin={() => handleEmailLogin("")} // 변경된 부분
                  onForgotCredentials={handleForgotCredentials}
                  onSignUp={handleSignUp}
                />
              }
            />
            <Route
              path="/LoginToEmail"
              element={
                <LoginToEmail
                  onLogin={handleEmailLogin}
                  onGoogleLogin={handleGoogleLogin}
                  onForgotCredentials={handleForgotCredentials}
                  onSignUp={handleSignUp}
                />
              }
            />
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
