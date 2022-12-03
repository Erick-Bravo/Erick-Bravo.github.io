import styled from "@emotion/styled";
import { Link } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";

type ExternalLinkProps = {
  href: string;
  imgSrc: string;
  alt: string;
};

const ImageStyled = styled("img")({
  height: "40px",
  ":hover": {
    // filter: "drop-shadow(2px 2px 2px black)",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    height: "50px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    height: "60px",
  },
});

const ExternalLink = ({ href, imgSrc, alt }: ExternalLinkProps) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <ImageStyled src={imgSrc} alt={alt} />
    </Link>
  );
};

export default ExternalLink;
