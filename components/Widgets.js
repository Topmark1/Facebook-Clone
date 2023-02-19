import Image from "next/image";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import {EllipsisHorizontalIcon,VideoCameraIcon} from "@heroicons/react/24/solid"
import Contact from "./Contact";


const contacts = [
    {
        name:"The Queen",
        src:"https://links.papareact.com/6gg",
        profile:"https://links.papareact.com/l4v",
        },
    {
            name:"Harry Potter",
            src:"https://links.papareact.com/d0c",
            profile:"https://links.papareact.com/l4v",
            },
    {
    name:"James Bond",
    src:"https://links.papareact.com/r57",
    profile:"https://links.papareact.com/l4v",
    },
    {
    name:"Elon Musk",
    src:"https://links.papareact.com/kxk",
    profile:"https://links.papareact.com/kxk",
    },
    {
    name:"Jeff Bezoz",
    src:"https://links.papareact.com/k2j",
    profile:"https://links.papareact.com/f0p",
    },
    {
    name:"Mark Zuckerberg",
    src:"https://links.papareact.com/snf",
    profile:"https://links.papareact.com/snf",
    },
    {
    name:"Bill gates",
    src:"https://links.papareact.com/zvy",
    profile:"https://links.papareact.com/zvy",
    }
    ]

function Widgets(){
    
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <MagnifyingGlassIcon className="h-6" />
                    <EllipsisHorizontalIcon className="h-6" />
                </div>
            </div>
            {contacts.map(contact=>
                <Contact key={contact.src} src={contact.src} name={contact.name} />
                )}
        </div>
    )
}

export default Widgets;