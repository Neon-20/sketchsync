// writing the logo component over here
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="items-center justify-between flex flex-row flex-wrap">
      <div
        className="transition z-50 ease-in-out duration-300
        items-center text-transparent bg-clip-text gap-x-2 p-4 flex cursor-pointer"
      >
        <Image
          alt="Logo"
          src="/logo.png"
          width="50"
          height="50"
          className="object-cover cursor-pointer flex md:flex"
        />
        <p
          className="z-50 text-2xl text-white font-semibold 
            text-transparent cursor-pointer backdrop-blur-sm
            hidden md:flex"
        >
          SketchSync
        </p>
      </div>
      <button
        className="Btn text-sm z-50 mr-4 cursor-pointer font-semibold"
        type="button"
      >
        <Link href="/auth/sign-in">Get Started</Link>
      </button>
    </div>
  );
};

export default Logo;
