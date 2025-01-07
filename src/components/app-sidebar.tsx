"use client";
import {
  CircleHelp,
  CreditCard,
  Home,
  LogIn,
  LogOut,
  Settings,
  TableProperties,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const manages = [
  {
    title: "Home",
    url: "/manage",
    icon: Home,
  },
  {
    title: "Tables",
    url: "/manage/tables",
    icon: TableProperties,
  },
  {
    title: "Billing",
    url: "/manage/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/manage/setting",
    icon: Settings,
  },
];

const profiles = [
  {
    title: "Profile",
    url: "/manage/profile",
    icon: User,
  },
  {
    title: "Sign In",
    url: "/sign-in",
    icon: LogIn,
  },
  {
    title: "Sign Up",
    url: "/sign-up",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="bg-background flex-row items-center justify-center text-xl h-12 border">
        Template
      </SidebarHeader>
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupLabel>Manage</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {manages.map((item) => {
                const isActive = item.url === pathname;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <span
                          className={cn("p-1 rounded-md", {
                            "bg-primary": isActive,
                          })}
                        >
                          <item.icon
                            className={cn({
                              "text-primary": !isActive,
                              "text-white": isActive,
                            })}
                            size={14}
                          />
                        </span>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Profile</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {profiles.map((item) => {
                const isActive = item.url === pathname;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <span
                          className={cn("p-1 rounded-md", {
                            "bg-primary": isActive,
                          })}
                        >
                          <item.icon
                            className={cn({
                              "text-primary": !isActive,
                              "text-white": isActive,
                            })}
                            size={14}
                          />
                        </span>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-background">
        <section className="border rounded-md flex flex-col justify-center p-4 bg-sidebar-footer bg-no-repeat bg-cover">
          <div className="mb-4 bg-white w-fit rounded-md p-2">
            <CircleHelp className="text-primary" />
          </div>
          <div className="font-bold">Need help?</div>
          <div className="text-xs">Please check our docs</div>
          <Button className="mt-2" variant="secondary">
            DOCUMENTATION
          </Button>
        </section>
      </SidebarFooter>
    </Sidebar>
  );
}
