import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  value: string;
  percent: number;
};

const StatisticsCard = ({ title, icon, value, percent }: Props) => {
  const Icon = icon;

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-3">
          <div>
            <div className="text-xs text-gray-400">{title}</div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg">{value}</span>
              <span
                className={cn("text-sm ", {
                  "text-green-500": percent > 0,
                  "text-red-500": percent < 0,
                })}
              >
                {percent > 0 && "+"}
                {percent}%
              </span>
            </div>
          </div>
          <div className="rounded-md bg-primary p-2">
            {<Icon size={16} className="text-white" />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
