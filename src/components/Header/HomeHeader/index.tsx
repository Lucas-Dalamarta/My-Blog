import * as S from "../styled";

import { DEV_INFO } from "../../../shared/constants";

export const HomeHeader = () => {
  return (
    <>
      <S.BorderCircle
        priority
        src="/images/Profile.png"
        height={144}
        width={144}
        alt={DEV_INFO.name}
      />
      <S.Heading2XL>{DEV_INFO.name}</S.Heading2XL>
      <S.HeadingMD>
        <p>{DEV_INFO.description}</p>
      </S.HeadingMD>
    </>
  );
};
