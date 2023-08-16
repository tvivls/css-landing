"use client";

import { useEffect } from "react";

import { MenuScroll } from "@/components/MenuScroll";
import { Menu } from "@/components/Menu";
import { FirstBlock } from "@/components/FirstBlock";

export default function Home() {
  useEffect(() => {
    const menu = document.getElementById("menuScroll");

    document.addEventListener("scroll", () => {
      if (menu)
        window.pageYOffset > 208
          ? (menu.style.display = "block")
          : (menu.style.display = "none");
    });
    return () => {
      document.removeEventListener("scroll", () => {
        if (menu)
          window.pageYOffset > 208
            ? (menu.style.display = "block")
            : (menu.style.display = "none");
      });
    };
  }, []);
  return (
    <div style={{ height: "2000px", position: "relative" }}>
      <Menu />
      <MenuScroll />
      <FirstBlock />
    </div>
  );
}
