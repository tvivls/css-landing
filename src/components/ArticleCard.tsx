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
import textTruncate from '@/utils/textTruncate';

function ArticleCard({subtitleText, paragraphText, img}: {subtitleText: string; paragraphText: string; img: string}) {
  return (
    <Card>
      <Wrapper>
      <StyledImg src={img} alt=""/>
      <CardContent>
        <Subtitle>{subtitleText}</Subtitle>
        <Paragraph>{textTruncate(paragraphText)}</Paragraph>
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
