import type { NextPage } from "next";

export type BlogPage = NextPage & {
  Layout?: React.ComponentType;
}