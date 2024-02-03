import React from "react";
import { BackgroundGradientAnimation } from "./_components/background-animation";
import Logo from "./_components/logo";

const BackgroundGradientAnimationDemo = () => {
  return (
    <BackgroundGradientAnimation>
      <Logo/>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-6xl">
        <p className="bg-clip-text drop-shadow-2xl bg-gradient-to-b from-yellow-500/100 to-cyan-500">
        SketchSync For Collaborative <p className="bg-gradient-to-b bg-clip-text text-transparent from-yellow-500/100 to-cyan-500">Teams</p>
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
export default BackgroundGradientAnimationDemo;
