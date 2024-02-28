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
import { BBSData } from "@/types/types";

interface BbsCardProps {
  bbsCard: BBSData;
}

const BBSCard = ({ bbsCard }: BbsCardProps) => {
  const { id, username, title, content } = bbsCard;
  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className=" text-blue-500">
          Read me
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
