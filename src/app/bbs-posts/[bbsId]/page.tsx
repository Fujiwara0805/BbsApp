import React from "react";
import { BBSData } from "@/types/types";
import Link from "next/link";

/* 掲示板詳細取得処理 */
const getBbsDetail = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  const BbsDetailData: BBSData = await res.json();
  return BbsDetailData;
};

interface paramsProps {
  params: { bbsId: string };
}

const BBSDetailPage = async ({ params }: paramsProps) => {
  const bbsId = parseInt(params.bbsId);
  const BbsDetailData = await getBbsDetail(bbsId);
  console.log(BbsDetailData);
  const { title, username, content } = BbsDetailData;

  return (
    <div className=" mx-auto max-w-4xl p-4">
      <div className=" mb-8">
        <h1 className=" text-2xl font-bold">{title}</h1>
        <p className=" text-gray-700">{username}</p>
      </div>

      <div className=" mb-8">
        <p className=" text-gray-900">{content}</p>
      </div>

      <Link
        href={"/"}
        className=" bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-200"
      >
        戻る
      </Link>
    </div>
  );
};

export default BBSDetailPage;
