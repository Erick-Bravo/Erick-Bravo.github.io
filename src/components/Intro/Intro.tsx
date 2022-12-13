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


const Intro = ({open}: {open: boolean}) => {

  useEffect(() => {
    if(!open) {
      gsap.to("#profile_image", {
        x: 0,
        opacity: 1,
        duration: 1.8,
        delay: 0,
        ease: "back",
        rotate: "-360"
      })
      gsap.to("#resume", {
        opacity: .8,
        duration: 3,
        delay: 3.5
      })
    }
  }, [open])

  return (
    <IntroContainer>
      <NameAndTitleContainer>
        <NameTypography id="name" open={open}>ERICK BRAVO</NameTypography>
        <TitleTypography id="title" open={open}>Application Developer</TitleTypography>
        <ResumeLink
          href="/ErickBravoResume.pdf"
          target={"_blank"}
          rel="noopener noreferrer"
          id="resume"
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
          id="profile_image"
        />
        <SocialSites />
      </ImageContainer>
    </IntroContainer>
  );
};

export default Intro;
