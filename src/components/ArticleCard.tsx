import React from 'react';
import {
  Card,
  CardContent,
  DetailButton,
  Paragraph,
  StyledDetailImg,
  StyledImg,
  Subtitle,
} from '@/styledComponents/Articles';
import {arrowRightSVG} from '../../public/Images';

function ArticleCard({subtitleText, paragraphText, img}: {subtitleText: string; paragraphText: string; img: string}) {
  return (
    <Card>
      <StyledImg src={img} alt=""/>
      <CardContent>
        <Subtitle>{subtitleText}</Subtitle>
        <Paragraph>{paragraphText}</Paragraph>
        <DetailButton>
          Подробнее
          <StyledDetailImg src={arrowRightSVG} alt="Подробнее"/>
        </DetailButton>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
