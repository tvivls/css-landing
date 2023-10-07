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
import TextTruncate from '@/components/TextTruncate';

function Articles() {
  const headacheText = 'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы ';
  const migraineText = 'Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика ';
  const evidenceBasedMedicineText = 'Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться ';
  const antidepressantsText = 'Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив ';

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
          paragraphText={(<TextTruncate text={headacheText} maxLength={93}/>)}
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
            <Paragraph><TextTruncate text={migraineText} maxLength={79}/></Paragraph>
          </CardContent>
            <DetailButton>
              Подробнее
              <StyledDetailImg src={arrowRightSVG} alt="Подробнее"/>
            </DetailButton>
        </Card>
        <ArticleCard
          subtitleText="Доказательная медицина"
          paragraphText={(<TextTruncate text={evidenceBasedMedicineText}/>)}
          img={evidenceBasedMedicineSVG}
        />
        <ArticleCard
          subtitleText="Антидепрессанты"
          paragraphText={(<TextTruncate text={antidepressantsText} maxLength={82}/>)}
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
