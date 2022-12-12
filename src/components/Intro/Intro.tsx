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
import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from 'split-type'



const Intro = () => {
  useEffect(() => {
    const title = document.getElementById("name")!;
    const myText = new SplitType(title)
    gsap.to(".char", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      delay: 0.2,
    });
  })
  return (
    <IntroContainer>
      <NameAndTitleContainer>
        <NameTypography id="name">ERICK BRAVO</NameTypography>
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
