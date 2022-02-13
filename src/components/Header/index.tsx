import { HomeHeader } from "./HomeHeader";
import { PostHeader } from "./PostHeader";

interface HeaderProps {
  isHome: boolean;
}

export const Header = ({ isHome }: HeaderProps) =>
  isHome 
    ? <HomeHeader /> 
    : <PostHeader />;
