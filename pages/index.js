import Head from "next/head";
import Layout from "../components/layout";
// import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Panimate</title>
      </Head>
      <img src="/people.svg" alt="" />
    </Layout>
  );
}
