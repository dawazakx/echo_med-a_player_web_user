import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface QuickLinkItemProps {
  href: string;
  text: string;
  imgSrc: string;
}

const QuickLinkItem: React.FC<QuickLinkItemProps> = ({ href, text, imgSrc }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between border-b border-[#CBD5E1] pb-6"
    >
      <div className="flex gap-3 items-center">
        <img src={imgSrc} alt="icon" />
        <span className="text-primary font-medium text-lg">{text}</span>
      </div>
      <ChevronRight className="text-primary" />
    </Link>
  );
};

export default QuickLinkItem;
