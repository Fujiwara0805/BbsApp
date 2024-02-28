import prisma from "@/lib/db";
import { NextResponse } from "next/server";

/* 掲示板の全記事取得API */
export const GET = async (req: Request, res: NextResponse) => {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
};

/* 掲示板投稿処理API */
export const POST = async (req: Request, res: NextResponse) => {
  const { username, title, content } = await req.json();
  const posts = await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
  return NextResponse.json(posts);
};
