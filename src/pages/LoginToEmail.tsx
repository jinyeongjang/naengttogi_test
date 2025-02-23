import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/google-icon.svg";

type LoginToEmailProps = {
  onLogin: (username: string, password: string) => void;
  onGoogleLogin: () => void;
  onForgotCredentials: () => void;
  onSignUp: () => void;
};

const LoginToEmail: React.FC<LoginToEmailProps> = ({
  onLogin,
  onGoogleLogin,
  onForgotCredentials,
  onSignUp,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const handleBackToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-left ml-8 text-3xl font-normal text-gray-900">
          이메일로 로그인
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 ml-5 mr-5 px-4 shadow-2xl rounded-3xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm mr-10 font-bold text-gray-700"
              >
                이메일
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="이메일을 입력해주세요."
                  className="appearance-none block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700"
              >
                비밀번호
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="비밀번호를 입력해주세요."
                  className="appearance-none block w-full px-3 h-12 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full h-12 flex justify-center items-center py-2 px-4 border rounded-full border-transparent shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                로그인
              </button>
              <button
                onClick={onGoogleLogin}
                type="button"
                className="w-full h-12 flex justify-center items-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <img src={GoogleIcon} alt="Google" className="w-5 h-5 mr-2" />
                Google 계정으로 로그인
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBackToLogin}
                className="text-sm font-medium mt-2 ml-10 text-sky-600 hover:text-sky-500 underline"
              >
                로그인으로 돌아가기
              </button>
              <button
                onClick={onForgotCredentials}
                className="text-sm font-medium mt-2 mr-10 text-sky-600 hover:text-sky-500 underline"
              >
                아이디/비밀번호 찾기
              </button>
            </div>

            <div className="mt-12 flex justify-center items-center space-x-2">
              <span className="text-sm text-gray-500">오늘 처음오셨나요?</span>
              <button
                onClick={onSignUp}
                className="text-sm font-medium text-sky-600 hover:text-sky-500 underline"
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginToEmail;
