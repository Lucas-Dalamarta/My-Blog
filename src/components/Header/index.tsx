import Link from "next/link";
import { DEV_INFO } from "../../shared/constants";

import * as S from "./styled";

export const Sidebar = () => {
  return (
    <S.Sidebar>
      <Link href="/">
        <a>
          <S.BorderCircle
            priority
            src="/images/Profile.png"
            height={108}
            width={108}
            alt={DEV_INFO.name}
          />
        </a>
      </Link>
      <div>
        <S.HeadingLG>
          <Link href="/">
            <S.ColorInherit>{DEV_INFO.name}</S.ColorInherit>
          </Link>
        </S.HeadingLG>
        <S.HeadingMD>
          <p>{DEV_INFO.description}</p>
        </S.HeadingMD>
      </div>
    </S.Sidebar>
  );
}
