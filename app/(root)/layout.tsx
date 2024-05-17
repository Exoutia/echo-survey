import { Navbar } from "@/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-4rem)] px-4 md:px-6 py-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
