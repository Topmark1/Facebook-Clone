import Image from "next/image";
import {signIn} from "next-auth/react";

function Login(){
return (
<div className="grid place-items-center">

<img
src="./logo.png"
alt='next-auth practice'
style={{width:'300px',
            height:'300px',padding:'10px',margin:'105px 20px 0px 0px'}}
/>
<h1 
onClick={signIn}
className="p-5 bg-green-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
  </div>
)
}
export default Login;