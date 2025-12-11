import Link from "next/link";
import type { ArticleItem } from "../types";

interface ArticleItemProps {
  article: ArticleItem;
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Link
      href={`/${article.id}`}
      className={`max-w-[80%] min-h-[80px] bg-gradient-to-b 
                  from-[var(--color-mini-card)] 
                  to-[color-mix(in_srgb,var(--color-mini-card)_65%,black)]
                  p-5 rounded-md flex items-start gap-4 shadow-md
                  text-[var(--color-text-subtle)] 
                  hover:text-[var(--color-text-main)]
                  transition duration-150`}
    >
      <img
        src={"https://media1.tenor.com/m/uugvF0-aAHUAAAAC/ouka-shiunji-family-children.gif"}
        alt={article.title}
        className="w-[75px] h-[75px] rounded-md object-cover"
      />
      <div className="flex flex-col justify-center">
        <p className="text-sm text-[var(--color-text-subtle)]">{article.title}</p>
        <p className="text-sm text-[var(--color-text-subtle)]">description</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
