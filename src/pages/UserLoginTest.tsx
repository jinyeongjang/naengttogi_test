// src/pages/UserLoginTest.tsx
import React from "react";

interface UserProps {
  user: {
    [key: string]: any; // 모든 가능한 사용자 속성을 허용합니다.
  };
}

const UserLoginTest: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          로그인 테스트 페이지
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg">
          <p className="text-center mb-4">로그인에 성공했습니다!</p>
          <div className="space-y-2">
            {Object.entries(user).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-bold">{key}:</span>
                <span>
                  {typeof value === "object"
                    ? JSON.stringify(value)
                    : value.toString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginTest;
