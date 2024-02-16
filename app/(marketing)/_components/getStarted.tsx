import { Button } from "@/components/ui/button";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="text-center text-xs text-gray-200 flex flex-col backdrop-blur-sm z-50">
      {/* <Button
        variant="default"
        size="lg"
        type="button"
        className="z-50 mt-4 cursor-pointer backdrop-blur-sm font-semibold"
        asChild
      >
        <Link href="/auth/login">Get Started</Link>
      </Button> */}
      <button className="Btn mt-4 z-50">Jelly Button</button>
      {/* <p>Free For all</p> */}
    </div>
  );
};

export default GetStarted;
