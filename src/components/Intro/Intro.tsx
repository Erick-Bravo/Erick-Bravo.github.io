import SocialSites from "./SocialSites/SocialSites";
import {
  ImageContainer,
  IntroContainer,
  NameAndTitleContainer,
  NameTypography,
  ProfileImage,
  ResumeLink,
  TitleTypography,
} from "./Intro.styles";

const Intro = () => {
  return (
    <IntroContainer>
      <NameAndTitleContainer>
        <NameTypography>Erick Bravo</NameTypography>
        <TitleTypography>Application Developer</TitleTypography>
        <ResumeLink
          href="/ErickBravoResume.pdf"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          {"--> View Resume <--"}
        </ResumeLink>
      </NameAndTitleContainer>
      <ImageContainer>
        <ProfileImage
          src="/Baldy-modified.png"
          alt="Profile Pic"
          height="140"
          width="140"
        />
        <SocialSites />
      </ImageContainer>
    </IntroContainer>
  );
};

export default Intro;
