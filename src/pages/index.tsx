import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Next.JS Structure</h1>
      <p>A Next.js structure made by Me.</p>
    </Container>
  )
}

export default Home
