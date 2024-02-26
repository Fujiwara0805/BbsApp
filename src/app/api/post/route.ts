import prisma from "@/lib/db";
import { NextResponse } from "next/server";

/* 掲示板の全記事取得API */
export const GET = async (req: Request, res: NextResponse) => {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
};