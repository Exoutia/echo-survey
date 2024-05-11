import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <Card className="p-5 m-5 max-w-[300px] max-h-[300px]">
        <CardHeader>
          <CardTitle>Add New Form</CardTitle>
          <CardDescription>Click here to Create a new form</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/create/">
            <Button size="sm" className="w-full">
              Add
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
