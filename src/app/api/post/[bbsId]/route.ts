import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface paramsProps {
  params: { bbsId: string };
}
/* 掲示板の詳細記事取得API */
export const GET = async (req: Request, { params }: paramsProps) => {
  const bbsId = params.bbsId;
  const bbsDetailPost = await prisma.post.findUnique({
    where: { id: parseInt(bbsId) },
  });
  return NextResponse.json(bbsDetailPost);
};
