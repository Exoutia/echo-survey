
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Home = () => {
  return (
    <div className="space-y-4">

      <Card className="p-5 m-5 max-w-[300px] max-h-[300px]">
        <CardHeader>
          <CardTitle>Add New Form</CardTitle>
          <CardDescription>Click here to Create a new form</CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="sm" className="w-full">
            Add
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
