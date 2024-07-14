import React from "react";
import LoginForm from "@/components/auth/login-form";
import SessionData from "@/components/auth/get-session";

const LoginPage: React.FC = () => {

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
      <SessionData />
    </div>
  );
};

export default LoginPage;
