import type { NextPage } from "next";

export type LayoutType = {
  Layout: React.ComponentType;
}

export type BlogPage = NextPage & LayoutType;

