import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-4xl">Hello World!</h1>
        <p className="text-2xl">You are here means our app is working fine</p>
      </div>
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
