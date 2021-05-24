import Head from 'next/head'
import Links from '../src/components/Links/Links'

export default function Home (){
    return (
        <>
        <Head>
        <title>Evaluacion Frontend</title>
        <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C4D0BAQHO-se7LzpMfg/company-logo_200_200/0/1519900679278?e=2159024400&v=beta&t=MWLmX-9OFh6YAZ0TQb_opjgZjsjGOAjpKWXWvA0qKxw" />
        </Head>
        <div style={{justifyContent:'center',alignContent:'center',textAlign:'center', height:'100vh', marginTop:'30vh'}}>
            <h1>HOLA MUNDO!</h1>
            <h2>Esta página tiene como fin facilitar su navegación</h2>
            <Links/>   
        </div>
        </>
    )
}