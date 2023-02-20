import Image from "next/image";
import {useSession} from "next-auth/react";
import {
    FaceSmileIcon
} from "@heroicons/react/24/outline";
import {
    CameraIcon, VideoCameraIcon
} from "@heroicons/react/24/solid";
import {useRef,useState} from 'react';
import {db,storage} from '../firebase';
import {serverTimestamp,collection,addDoc,doc,updateDoc} from 'firebase/firestore';
import {ref,uploadString,getDownloadURL,uploadBytesResumable} from "firebase/storage";

function InputBox(){
const {data:session} = useSession();
const inputRef = useRef(null);
const filepickerRef = useRef(null);
const [imageToPost,setImageToPost] = useState(null);

const sendPost =(e) =>{
e.preventDefault();
if(!inputRef.current.value) return;
//green
addDoc(collection(db, "users"), {
    message: inputRef.current.value,
name:session.user.name,
email:session.user.email,
image:session.user.image,
timestamp:serverTimestamp(),
  }).then((docRef)=>{if(imageToPost){
//sending image to Fire storage
	const uploadTask = ref(storage,('users/'+docRef.id))
	uploadString(uploadTask,imageToPost,'data_url');
removeImage();
const uploadTask1 = uploadBytesResumable(uploadTask,imageToPost)
	uploadTask1.on(
'state_changed',
null,
error=>console.error(error),
()=>{
//when the upload complete

getDownloadURL(uploadTask).then(url=>{updateDoc(doc(db,'users',docRef.id),({postImage:url}))
})
//console.log(getDownloadURL(uploadTask))
//////////////
}
)
}})			
 
//image
inputRef.current.value="";
} ;

const addImagePost=(e)=>{
const reader = new FileReader();
if(e.target.files[0]){
	reader.readAsDataURL(e.target.files[0]);}
 reader.onload =(readerEvent)=> {setImageToPost(readerEvent.target.result)}}

const removeImage = () => {
	setImageToPost(null)
}

    return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
	<div className="flex space-x-1 sm:space-x-4 p-4 items-center">
	<Image
className="rounded-full"
alt='facebook practice'
src={session.user.image}
width={40}
height={40}
layout='fixed'
/>
<form className="flex flex-1">
<input 
className="p-2 rounded-full h-12 bg-gray-100 flex-grow sm:px-5 focus:outline-none text-xs sm:text-xl"
type="text"
ref={inputRef} 
placeholder={"what's on your mind, "+ session.user.name+'?'}
/>
<button hidden className="" type="submit" onClick={sendPost}>Submit</button>
</form>

{imageToPost &&(
<div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
<img className="h-10 object-contain" src={imageToPost}  width={40} height={40} alt='imagepost'/>
<p className="text-xs text-red-500 text-center">Remove</p>
</div>)
}
    	</div>
	<div className='flex p-3 border-t justify-between'>
		<div className='inputIcon flex-col sm:flex-row w-1/3'>
	<VideoCameraIcon className='h-7 text-red-500'/>
<p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
    		</div>
		<div onClick={()=>filepickerRef.current.click()} className='inputIcon flex-col sm:flex w-1/3 '>
<CameraIcon className='h-7 text-green-700'/>
<p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
<input ref={filepickerRef} onChange={addImagePost} type="file" hidden />
   		</div>

		<div className='inputIcon flex-col sm:flex-row w-1/3'>
<FaceSmileIcon className='h-7 text-yellow-500'/>
<p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
    		</div>
    	</div>
    </div>
    );
}

export default InputBox;