import React, {ReactNode} from 'react';
import {
  Card,
  CardContent,
  DetailButton,
  Paragraph,
  StyledDetailImg,
  StyledImg,
  Subtitle, Wrapper,
} from '@/styledComponents/Articles';
import {arrowRightSVG} from '../../public/Images';

function ArticleCard({subtitleText, paragraphText, img}: {subtitleText: string; paragraphText: string | ReactNode; img: string}) {
  return (
    <Card>
      <Wrapper>
      <StyledImg src={img} alt=""/>
      <CardContent>
        <Subtitle>{subtitleText}</Subtitle>
        <Paragraph>{paragraphText}</Paragraph>
      </CardContent>
      </Wrapper>
      <DetailButton>
        Подробнее
        <StyledDetailImg src={arrowRightSVG} alt="Подробнее"/>
      </DetailButton>
    </Card>
  );
}

export default ArticleCard;
