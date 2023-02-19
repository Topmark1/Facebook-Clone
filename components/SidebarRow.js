import Image from "next/image";


function SidebarRow({src,Icon,title}){
    
    return (
        <div className="hidden sm:flex item-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
{src && (
<Image
alt=''
className="rounded-full"
src={src}
width={30}
height={30}
layout="fixed"/>
)}
{Icon && (
<Icon className="h-8 w-8 text-green-500"/>
)}
<p className="hidden sm:inline-flex font-medium truncate">{title}</p>
        </div>
    )
}

export default SidebarRow;  