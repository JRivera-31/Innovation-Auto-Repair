import Layout from '../components/Layout/layout';
import Head from 'next/head';
import Form from "../components/EmployeeLoginForm/login";

export default function Employee() {
  return (
    <Layout employee>
      <Head>
        <title>Employee Login</title>
        <link href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <Form />
      </div>
    </Layout>
  );
};