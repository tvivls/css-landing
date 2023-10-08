import {
  AnimationDiv, Background,
  Card,
  CardContent, Container, DetailButton, Frame, Paragraph,
  StyledCaption, StyledDetailImg,
  StyledDiv,
  StyledH2,
  StyledPicDiv, Subtitle, WhiteDot, Wrapper,
} from '@/styledComponents/Articles';
import {
  antidepressantsSVG,
  arrowRightSVG,
  backgroundSVG,
  evidenceBasedMedicineSVG,
  headacheSVG,
} from '../../public/Images';
import {StyledButton} from '@/styledComponents/MainForm';
import ArticleCard from '@/components/ArticleCard';
import textTruncate from '@/utils/textTruncate';

function Articles() {
  const migraineText = textTruncate('Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика ');

  return (
    <Container>
      <StyledDiv>
        <StyledCaption>СТАТЬИ</StyledCaption>
        <StyledH2 style={{textAlign: 'center'}}>
          Статьи для врачей, пациентов и их родственников, а также научно-популярные доклады о прорывах в медицине
        </StyledH2>
      </StyledDiv>
      <StyledPicDiv>
        <ArticleCard
          subtitleText="Головная боль"
          paragraphText='Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы '
          img={headacheSVG}
        />
        <Card>
          <Wrapper>
            <Background src={backgroundSVG} alt=""/>
            <AnimationDiv>
              <Frame>
                <h2 style={{color: '#458FF6', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2}}>T</h2>
                <WhiteDot/>
              </Frame>
            </AnimationDiv>
          </Wrapper>
          <CardContent>
            <Subtitle>Мигрень</Subtitle>
            <Paragraph>{migraineText}</Paragraph>
          </CardContent>
            <DetailButton>
              Подробнее
              <StyledDetailImg src={arrowRightSVG} alt="Подробнее"/>
            </DetailButton>
        </Card>
        <ArticleCard
          subtitleText="Доказательная медицина"
          paragraphText='Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться '
          img={evidenceBasedMedicineSVG}
        />
        <ArticleCard
          subtitleText="Антидепрессанты"
          paragraphText='Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив '
          img={antidepressantsSVG}
        />
      </StyledPicDiv>
      <StyledDiv>
        <StyledButton>Все статьи</StyledButton>
      </StyledDiv>
    </Container>
  );
}

export default Articles;
