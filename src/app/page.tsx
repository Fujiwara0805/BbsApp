import BBSCardList from "@/components/layouts/BBSCardList/BBSCardList";

/* 掲示板データ全取得 */
const getBbsAll = async () => {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Home = async () => {
  const posts = await getBbsAll();
  return (
    <main>
      <BBSCardList />
    </main>
  );
};

export default Home;
