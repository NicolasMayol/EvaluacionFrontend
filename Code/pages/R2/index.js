import Head from 'next/head'
import Table from '../../src/components/Table'



export default function R2() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table/>
    </div>
  )
}
