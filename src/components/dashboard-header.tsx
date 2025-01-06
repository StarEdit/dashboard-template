import ThemeToggle from "@/components/theme-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, LogIn, Search, Slash } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex-1 flex items-center justify-between px-1">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>Dashboard</div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <Search
            strokeWidth={1}
            size={18}
            className="absolute left-2 top-2 opacity-50"
          />
          <Input className="!pl-8" placeholder="Type here..." />
        </div>
        <Button variant="ghost">
          <LogIn /> Sign In
        </Button>
        <Popover>
          <PopoverTrigger>
            <Bell size={16} />
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DashboardHeader;
