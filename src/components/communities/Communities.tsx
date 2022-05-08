import styled from 'styled-components';
import { ReactComponent as VkIcon } from '../../assets/images/vk-icon.svg';
import { LINKS } from '../../const';

const CommunitiesWrapper = styled.div`
  position: absolute;
  left: 116px;
  bottom: 65px;
  .title {
    margin-bottom: 21px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
  }
`;

const COMMUNITIES = [
  {
    link: LINKS.VK_COMMUNITY,
    component: <VkIcon />,
  },
];

export const Communities = () => {
  return (
    <CommunitiesWrapper>
      <div className="title">Будь в курсе всех событий проекта!</div>
      {COMMUNITIES.map((el, i) => (
        <a href={el.link} key={i}>
          {el.component}
        </a>
      ))}
    </CommunitiesWrapper>
  );
};
