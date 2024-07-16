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

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log("Login attempt:", username, password);
  };

  const handleGoogleLogin = () => {
    console.log("Google login attempt");
  };

  const handleEmailLogin = (email: string) => {
    console.log("Email login attempt", email);
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
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route
              path="/Login"
              element={
                <Login
                  onLogin={handleLogin}
                  onGoogleLogin={handleGoogleLogin}
                  onEmailLogin={() => handleEmailLogin("")}
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
          </Routes>
        </main>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
