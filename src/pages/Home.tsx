import { ArticleCard } from "../components/ArticleCard";

export default function Home() {
  return (
    <div className="mt-5">
      <ArticleCard id="first-article" content="第一篇文章, 其实是Readme" date={new Date(Date.now())} />
      <ArticleCard id="2" content="其实没有这个文章" date="2025/4/1" />
    </div>
  );
}
