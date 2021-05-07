import Head from "next/head";
import Layout from "../components/layout";
// import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Panimate</title>
      </Head>

      <img src="/people.svg" alt="" width="200" height="250" />
      <img src="/pinkflower.svg" alt="" width="200" height="250" />
      <img src="/blueflower.svg" alt="" width="200" height="250" />
      <img src="/redbutton.svg" alt="" width="100" height="250" />
      <img src="/bluebutton.svg" alt="" width="100" height="250" />
      <img src="/Vector 4.svg" alt="" width="100" height="250" />
      <img src="/Vector 6.svg" alt="" width="100" height="250" />
      <img src="/Vector 8.svg" alt="" width="100" height="150" />
      <img src="/Vector 7.svg" alt="" width="100" height="150" />
    </Layout>
  );
}
