import { PortfolioItem } from "../ui/components/PortfolioItem";
import { works } from "../lib/works";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-2 auto-rows-[max(25%)] gap-3 w-full h-full p-5 overflow-x-auto md:grid-cols-4 md:auto-rows-[max(32%)]">
      {works.map((item, index) => (
        <PortfolioItem
          key={index}
          name={item.name}
          imageUrl={item.imageUrl}
          imageAlt={item.name}
          borderRadius="xl"
          className="w-full h-full"
        />
      ))}
    </div>
  );
}
