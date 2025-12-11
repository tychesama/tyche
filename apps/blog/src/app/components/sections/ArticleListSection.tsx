import { getCategorizedArticles } from "../../../../lib/articles";
import ArticleItem from "components/ArticleItem";
import type { ArticleItem as ArticleItemType } from "../../../../types";

const articles = getCategorizedArticles();

const ArticleListSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-[720px] overflow-y-auto">
      {Object.entries(articles).map(([category, items]) => (
        <div key={category} className="flex flex-col gap-4 w-full ">

          {/* Category title
          <h2 className="font-cormorantGaramond text-4xl text-[var(--color-text-main)]">
            {category}
          </h2> */}

          {/* List of articles in this category */}
          <div className="flex flex-col gap-2.5 font-poppins text-lg">
            {items.map((article: ArticleItemType) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default ArticleListSection;
