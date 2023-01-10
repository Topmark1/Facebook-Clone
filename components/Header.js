import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/24/solid";
import {
    FlagIcon,
    PlayIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header(){
    return (
        <div>
            {/*Left*/}
            <div className="flex items-center">
            <Image src='https://Links.papareact.com/5me'
            width ={40}
            height={40}
            layout='fixed' />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <MagnifyingGlassIcon className="h-6"/>
                <input className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="search facebook" />
            </div>
            </div>
            {/* Center */}
            {/* Right */}
        </div>
    )
}

export default Header