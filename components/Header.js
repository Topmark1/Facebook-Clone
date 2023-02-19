import Image from "next/image";
import HeaderIcon from "./HeaderIcon"
import {signOut,useSession} from 'next-auth/react';

//image
import {
    BellIcon,
    ChatBubbleOvalLeftIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    TableCellsIcon,
} from "@heroicons/react/24/solid";
import {
    FlagIcon,
    PlayIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header(){
const{data:session} = useSession();
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/*Left*/}
            <div className="flex items-center">
            <img src='./logo.png'
            alt=''
            style={{width:'40px',
            height:'40px'}}
             />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <MagnifyingGlassIcon className="h-6 text-gray-600 cursor-pointer"/>
                <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="search faceback" />
            </div>
            </div>
            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right */}

<div className="flex items-center sm:space-x-2 justify-end">
{/*profile pic */}
<Image 
onClick={signOut}
className='cursor-pointer rounded-full h-10'
         src={session.user.image} 
   
width={40}
height={40}
      alt="profile" />
<p className='whitespace-nowrap font-semibold pr-3'> {session.user.name}</p>
<TableCellsIcon className="icon" />
<ChatBubbleOvalLeftIcon className="icon" />
<BellIcon className="icon" />
<ChevronDownIcon className="icon" />
</div>
        </div>
    )
}
//"./profile.PNG"
export default Header