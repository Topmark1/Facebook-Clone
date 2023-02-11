import Head from 'next/head';
import Login from '../components/Login'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import {useSession} from 'next-auth/react';



export default function Home(){
 
const{data:session} = useSession();
 
if(!session) return <Login />;
return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      {/*Header*/}
      
<Header />
    
<main className='flex'>
       
{/*Sidebar*/}
<Sidebar />
       
{/*Feed*/}
<Feed />

  
     {/*Widgets*/}
      
</main>
    </div>
  )
}




//export async function getServerSideProps(context){



//get the user
//const session = await getSession(context);
//return {props:{session,},}}
