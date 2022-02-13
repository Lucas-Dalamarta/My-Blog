import Link from 'next/link';
import * as S from '../styled'

import { DEV_INFO } from "../../../shared/constants";

export const PostHeader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
      }}
    >
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
      <div style={{  }}>
        <S.HeadingLG>
          <Link href="/" aria-label="Voltar para a Home">
            <S.ColorInherit>{DEV_INFO.name}</S.ColorInherit>
          </Link>
        </S.HeadingLG>
        <S.HeadingMD>
          <p>{DEV_INFO.description}</p>
        </S.HeadingMD>
      </div>
    </div>
  );
};
