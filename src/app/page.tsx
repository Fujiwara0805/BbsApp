import BBSCardList from "@/components/layouts/BBSCardList/BBSCardList";
import { BBSData } from "@/types/types";

/* 掲示板データ全取得 */
const getBbsAll = async () => {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const BbsAllData: BBSData[] = await res.json();
  return BbsAllData;
};

const Home = async () => {
  const BbsAllData = await getBbsAll();

  return (
    <main>
      <BBSCardList BbsAllData={BbsAllData} />
    </main>
  );
};

export default Home;
