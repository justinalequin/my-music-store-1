import React from "react";
import { fetchUser } from "../../fetchData";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { userSignedInAction } from "../../reduxStore";

const SignInPage = (props) => {
  const dispatch = useDispatch();

  const handleUserLogIn = () =>
    fetchUser("fake@user.com", "123")
      //Put the data on redux
      .then((data) => console.log("data: ", data.firstName));

  const userSingedIn = () => {
    dispatch({
      type: userSignedInAction,
    });
  };

  const reduxState = useSelector((state) => state);

  console.log("reduxState: ", reduxState);

  return (
    <Layout>
      <h1>Sign In page</h1>
      <button onClick={handleUserLogIn}>Log in user</button>
      <button onClick={userSingedIn}>Click</button>
    </Layout>
  );
};

export default SignInPage;
