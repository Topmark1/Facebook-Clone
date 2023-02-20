import Image from "next/image";

function StoryCard({name,src,profile}){
    return (
        <div className="flex-grow relative h-14 w-10 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
 	<Image 
	className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
	alt='learning next-js'
	src={profile}
	width={40}
	height={40}
	layout="fixed"
	objectFit="cover" />
	<Image
className="object-cover filter brightness-75 rounded-full sm:rounded-xl lg:rounded-3xl"
alt='learning next-js'

	src={src}
	layout="fill"
	 />
<div className='truncate opacity-0 lg:opacity-100 relative mt-44 text-sm text-white font-bold'>{name}</div>
        </div>
    )
}
//blue
export default StoryCard;