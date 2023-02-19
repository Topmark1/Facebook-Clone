import Image from "next/image";
import {useCollection,useCollectionOnce} from "react-firebase-hooks/firestore"
import {db} from '../firebase';
import Post from './Post';
import {collection,orderBy,query} from 'firebase/firestore';

function Posts({posts}){
const [realtimePosts,loading,error] = useCollection(
	query(collection(db,'users'),orderBy('timestamp','desc')));
	
return (
    <div className="">
	{
	realtimePosts?
	realtimePosts?.docs.map(post=>{
	return 	<Post 
	key={post.id}
	name={post.data().name}
	message={post.data().message}
	email={post.data().email}
	timestamp={post.data().timestamp}
	image={post.data().image}
	postImage={post.data().postImage}
	/>
	}):
	posts.map((post)=>{
	return 	<Post 
	key={post.id}
	name={post.name}
	message={post.message}
	email={post.email}
	timestamp={post.timestamp}
	image={post.image}
	postImage={post.postImage}
	/>
	})
	
	}
    </div>
    );
}
export default Posts;


// export async function getServerSideProps(context){
  
// const session = await getServerSession(
//   context.req,
//   context.res,
//   authOptions);
// return {props:{session,},}}