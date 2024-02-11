// writing the logo component over here
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <div className="transition z-50 ease-in-out duration-300
        items-center text-transparent bg-clip-text gap-x-2 p-4 flex cursor-pointer">
            <Image
            alt = "Logo"
            src = "/logo.png"
            width="50"
            height="50"
            className="object-cover cursor-pointer flex md:flex"
            />
            <Link href="">
            <p className="z-100 text-2xl text-white font-semibold 
            text-transparent cursor-pointer backdrop-blur-sm">
            SketchSync
            </p>
            </Link>
        </div>
    );
}

export default Logo;