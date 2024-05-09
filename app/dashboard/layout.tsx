import { Navbar } from "@/components/navbar";

const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default rootLayout;
