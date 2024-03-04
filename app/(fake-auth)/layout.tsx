import { BackgroundGradientAnimation } from "../(marketing)/_components/background-animation";
// import { ConvexClientProvider } from "@/providers/convex-client-provider";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackgroundGradientAnimation>
      <div className="flex flex-col h-screen z-50 items-center justify-center">
        {children}
      </div>
    </BackgroundGradientAnimation>
  );
};

export default AuthLayout;
