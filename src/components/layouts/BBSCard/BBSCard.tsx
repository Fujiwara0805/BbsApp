import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minima
        pariatur explicabo? Rerum quia harum placeat? Cupiditate qui molestias
        commodi. Necessitatibus placeat ea aspernatur assumenda libero animi
        consequatur ratione quibusdam tempora facilis, laudantium molestias rem
        quia dolore unde eius error ad, qui voluptatibus harum quaerat. Quaerat
        ipsum hic officia nemo.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/"} className=" text-blue-500">
          Read me
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
