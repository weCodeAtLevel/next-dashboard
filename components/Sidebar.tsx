"use client";
import React, { useState } from "react";
import Nav from "./ui/nav";
import { LayoutDashboard, Home, User, AlignJustify, X } from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

function Sidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const isMobile = onlyWidth < 768;

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative border-r px-3 pb-10 pt-24">
      <Button
        className="bg-transparent hover:bg-slate-400 text-black"
        onClick={handleToggle}
      >
        {isCollapsed ? <AlignJustify /> : <X />}
      </Button>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Home",
            icon: Home,
            variant: "default",
            href: "/",
          },
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "default",
            href: "/dashboard",
          },
          {
            title: "Users",
            icon: User,
            variant: "default",
            href: "/users",
          },
        ]}
      />
    </div>
  );
}

export default Sidebar;
