import Head from 'next/head';
import Login from '../components/Login'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import {useSession} from 'next-auth/react';
import {db} from '../firebase';
import {collection,orderBy,query,getDocs} from 'firebase/firestore';
//import {getServerSession} from 'next-auth/next';
//import {authOptions} from './api/auth/[...nextauth]';


export default function Home({posts}){
 
const{data:session} = useSession();
 
if(!session) return <Login />;
return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      {/*Header*/}
      
<Header />
    
<main className='flex md:space-x-2'>
       
{/*Sidebar*/}
<Sidebar />
       
{/*Feed*/}
<Feed posts={posts}/>

{/*Widgets*/}
<Widgets />
      
</main>
    </div>
  )
}



//for Server Side Rendering
export async function getServerSideProps(){
// const session = await getServerSession(
//   context.req,
//   context.res,
//   authOptions);
const posts = await getDocs(query(collection(db,'users'),orderBy('timestamp','desc')))
const docs = posts.docs.map((post)=>({
  id:post.id,
  ...post.data(),
  timestamp:null,
}))

return {props:{posts:docs},}}
//to activate code do this 2 things --->
//switch live mode on
//https://facebook-clone-lac-nine.vercel.app/  on env from http://localhost:3000
