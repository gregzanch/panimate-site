import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Panimate</title>
      </Head>
    </Layout>
  );
}
