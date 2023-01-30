import Image from "next/image";
import {useSession} from "next-auth/react";
import {
    FaceSmileIcon
} from "@heroicons/react/24/outline";
import {
    CameraIcon, VideoCameraIcon
} from "@heroicons/react/24/solid";
import {useRef} from 'react';
import {db} from '../firebase';
import {serverTimestamp,collection,addDoc} from 'firebase/firestore';

function InputBox(){
const {data:session} = useSession();
const inputRef = useRef(null);

const sendPost =(e) =>{
e.preventDefault();
if(!inputRef.current.value) return;

/*db.collection('users').add({
message: inputRef.current.value,
name:session.user.name,
email:session.user.email,
image:session.user.image,
timestamp:serverTimestamp()
});*/

try {
  const docRef = addDoc(collection(db, "users"), {
    message: inputRef.current.value,
name:session.user.name,
email:session.user.email,
image:session.user.image,
timestamp:serverTimestamp(),
  });

} catch (e) {
  console.error("Error adding document: ", e);
}

inputRef.current.value="";
} ;

    return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
	<div className="flex space-x-4 p-4 items-center">
	<Image
className="rounded-full"
src={session.user.image}
width={40}
height={40}
layout='fixed'
/>
<form className="flex flex-1">
<input 
className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
type="text"
ref={inputRef} 
placeholder={"what's on your mind, "+ session.user.name+'?'}
/>
<button hidden className="" type="submit" onClick={sendPost}>Submit</button>
</form>
    	</div>
	<div className='flex justify-evenly p-3 border-t'>
		<div className='inputIcon'>
	<VideoCameraIcon className='h-7 text-red-500'/>
<p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
    		</div>
		<div className='inputIcon'>
<CameraIcon className='h-7 text-green-500'/>
<p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
    		</div>
		<div className='inputIcon'>
<FaceSmileIcon className='h-7 text-yellow-500'/>
<p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
    		</div>
    	</div>
    </div>
    );
}

export default InputBox;