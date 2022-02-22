import React from 'react';
import { fetchUser } from '../../fetchData';
import Layout from '../layout/Layout';

const SignInPage = () => {

  const handleUserLogIn = () => fetchUser('fake@user.com', '123')
  //Put the data on redux
  .then((data) => console.log('data: ', data));

  return (
    <Layout>
      <h1>Sign In page</h1>
      <button onClick={handleUserLogIn}>Log in user</button>
    </Layout>
  )
};

export default SignInPage;
