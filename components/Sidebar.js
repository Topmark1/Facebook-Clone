import Image from "next/image";
import SidebarRow from './SidebarRow';
import {useSession} from 'next-auth/react';
import {
ChevronDownIcon,
ShoppingBagIcon,
UserGroupIcon,
} from "@heroicons/react/24/outline";
import{
CalendarIcon,
ClockIcon,
ComputerDesktopIcon,
UsersIcon,
} from "@heroicons/react/24/solid";

function Sidebar(){
const {data:session} = useSession();
    return (
        <div className="p-2 mt-5 mx-w-[600px] xl:min-w-[300px]">
<SidebarRow src={session.user.image} title={session.user.name} />
<SidebarRow Icon={UsersIcon} title="friends"/>
<SidebarRow Icon={UserGroupIcon} title="Groups"/>
<SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
<SidebarRow Icon={ComputerDesktopIcon} title="watch"/>
<SidebarRow Icon={CalendarIcon} title="Events"/>
<SidebarRow Icon={ClockIcon} title="Memories"/>
<SidebarRow Icon={ChevronDownIcon} title="See More"/>
        </div>
    )
}

export default Sidebar;