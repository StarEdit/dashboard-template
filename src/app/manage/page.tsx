import StatisticsCard from "@/components/statistics-card";
import { formatCurrency, formatNumber } from "@/lib/client";
import { FileText, Globe, ShoppingCart, WalletMinimal } from "lucide-react";

const Home = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <StatisticsCard
        title="Today’s Money"
        value={formatCurrency(53000)}
        percent={+55}
        icon={WalletMinimal}
      />
      <StatisticsCard
        title="Today’s User"
        value={formatNumber(2300)}
        percent={5}
        icon={Globe}
      />
      <StatisticsCard
        title="New Clients"
        value={formatNumber(3052)}
        percent={-14}
        icon={FileText}
      />
      <StatisticsCard
        title="Today’s Money"
        value={formatCurrency(173000)}
        percent={8}
        icon={ShoppingCart}
      />
    </div>
  );
};

export default Home;
