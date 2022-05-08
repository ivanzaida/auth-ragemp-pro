import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../assets/images/background.png';
import TrianglesImage from '../../assets/images/triangles.png';
import BulletImage from '../../assets/images/bullet.png';
import TrevorImage from '../../assets/images/trevor.png';
import Line from '../../assets/images/vector4.svg';
import Stroke1 from '../../assets/images/stroke-1.svg';
import Stroke2 from '../../assets/images/stroke-2.svg';
import Arrow from '../../assets/images/arrow.svg';

const BackgroundWrapper = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  .background {
    width: 100%;
    height: 100%;
  }

  .triangles {
    position: absolute;
    width: 870px;
    height: 1079px;
    left: 1050px;
    top: 1px;
  }

  .bullet-1 {
    position: absolute;
    width: 112px;
    height: 99px;
    left: 1293px;
    top: 698px;
  }

  .trevor {
    position: absolute;
    width: 786px;
    height: 965px;
    right: 134px;
    top: 114px;
  }

  .bullet-2 {
    position: absolute;
    width: 72px;
    height: 64px;
    right: 467px;
    bottom: 192px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .bullet-3 {
    position: absolute;
    width: 72px;
    height: 64px;
    right: 341px;
    bottom: 166px;
    transform: rotate(-180deg);
  }

  .bullet-4 {
    position: absolute;
    width: 93px;
    height: 83px;
    bottom: 248px;
    right: 197px;

    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .blur {
    position: absolute;
    width: 1920px;
    height: 1080px;
    left: 0;
    top: 1px;
    background: rgba(35, 35, 35, 0.83);
  }

  .line {
    position: absolute;
    width: 468.5px;
    height: 541px;
    left: 547.5px;
    top: 88px;
    backdrop-filter: blur(17px);
  }

  .stroke-1 {
    position: absolute;
    width: 814px;
    height: 1081px;
    left: 0;
    top: 0;
  }

  .stroke-2 {
    position: absolute;
    width: 552px;
    height: 605px;
    right: 154px;
    bottom: 0;
  }

  .arrow-left {
    position: absolute;
    left: 509px;
    top: 78px;
  }

  .arrow-right {
    position: absolute;
    top: 615px;
    left: 1029px;
    transform: rotate(180deg);
  }
`;

export const Background: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <BackgroundWrapper>
      <img alt="" className="triangles" src={TrianglesImage} />
      <img alt="" className="background" src={BackgroundImage} />
      <img alt="" className="bullet-1" src={BulletImage} />
      <img alt="" className="trevor" src={TrevorImage} />
      <img alt="" className="bullet-2" src={BulletImage} />
      <img alt="" className="bullet-3" src={BulletImage} />
      <img alt="" className="bullet-4" src={BulletImage} />
      <div className="blur" />
      <img alt="" className="line" src={Line} />
      <img alt="" className="stroke-1" src={Stroke1} />
      <img alt="" className="stroke-2" src={Stroke2} />
      <img src={Arrow} alt="" className="arrow-left" />
      <img src={Arrow} alt="" className="arrow-right" />
      {children}
    </BackgroundWrapper>
  );
};
