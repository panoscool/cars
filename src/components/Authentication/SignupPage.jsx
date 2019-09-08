import React from "react";
import { connect } from "react-redux";
import AuthForm from "./AuthForm";

function SignupPage({ loading }) {
  const handleSubmit = data => {
    console.log(data);
  };
  return (
    <AuthForm
      loading={loading}
      emailLabel="Email"
      passwordLabel="Password"
      buttonLabel="Continue"
      onSubmit={handleSubmit}
    />
  );
}

const mapStateToProps = ({ asyncReducer }) => ({
  loading: asyncReducer.loading,
  error: asyncReducer.error
});

export default connect(mapStateToProps)(SignupPage);
