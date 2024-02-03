// writing the logo component over here
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <div className="hover:opacity-200/10 transition z-50
        items-center gap-x-2 hidden backdrop-blur-sm p-2 md:flex cursor-pointer">
            <Image
            alt = "Logo"
            src = "/logo.png"
            width="50"
            height="50"
            className="object-cover cursor-pointer"
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