import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import LoginToEmail from "./pages/LoginToEmail";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>냉뚝이 테스트 페이지입니다.</h1>
                </div>
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/LoginToEmail" element={<LoginToEmail />} />
          </Routes>
        </main>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
