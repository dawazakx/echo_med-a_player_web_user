import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router";

interface PaymentItemProps {
  href: string;
  header: string;
  text: string;
  imgSrc: string;
}

const PaymentItem: React.FC<PaymentItemProps> = ({ href, text, imgSrc, header }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(href);
  };

  return (
    <div
      onClick={handleNavigation}
      className="flex items-center cursor-pointer justify-between border-b border-[#CBD5E1] pb-6"
    >
      <div className="flex gap-3 items-center">
        <img src={imgSrc} alt="icon" />
        <div className="flex flex-col items-start">
          <span className="text-primary font-semibold text-lg">{header}</span>
          <p className="text-primary pt-1 text-lg">{text}</p>
        </div>
      </div>
      <ChevronRight className="text-primary" />
    </div>
  );
};

export default PaymentItem;
