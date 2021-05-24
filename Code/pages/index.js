import Head from 'next/head'
import Links from '../src/components/Links/Links'

export default function Home (){
    return (
        <>
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{justifyContent:'center',alignContent:'center',textAlign:'center', height:'100vh', marginTop:'30vh'}}>
            <h1>HOLA MUNDO!</h1>
            <h2>Esta página tiene como fin facilitar su navegación</h2>
            <Links/>   
        </div>
        </>
    )
}