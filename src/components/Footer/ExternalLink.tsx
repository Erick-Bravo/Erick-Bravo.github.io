import styled from "@emotion/styled";
import { Link } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";

type ExternalLinkProps = {
  href: string;
  imgSrc: string;
  alt: string;
};

const ImageStyled = styled("img")({
  height: "50px",
  filter: "drop-shadow(2px 2px 2px black)",
  ":hover": {
    filter: "none",
    opacity: 0.8,
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    height: "80px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    height: "85px",
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
