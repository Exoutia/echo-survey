import { Navbar } from "@/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};

export default RootLayout;
