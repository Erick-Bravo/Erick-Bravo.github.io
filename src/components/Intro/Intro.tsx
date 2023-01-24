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
        duration: 2,
        delay: 0,
        ease: "back",
        rotate: "-360"
      })
      gsap.to("#resume", {
        opacity: .8,
        duration: 2,
        delay: 3
      })
    }
  }, [open])

  return (
    <IntroContainer>
      <NameAndTitleContainer>
        <NameTypography id="name" open={open}>ERICK BRAVO</NameTypography>
        <TitleTypography id="title" open={open}>Software Developer</TitleTypography>
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
          src="/profile.png"
          alt="Profile Pic"
          height="140"
          width="140"
          id="profile_image"
        />
        <SocialSites open={open} />
      </ImageContainer>
    </IntroContainer>
  );
};

export default Intro;
