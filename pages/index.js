import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login'
import {getSession} from 'next-auth/react';


export default function Home({session}) {
  
if(!session) return <Login />;
return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      {/*Header*/}
      <Header />
      <main>
       {/*Sidebar*/}
       {/*Feed*/}
       {/*Widgets*/}
      </main>
    </div>
  )
}


export async function getServersSideProps(context){


//get the user
const session = await getSession(context);
  return {    props:{session} }
}
