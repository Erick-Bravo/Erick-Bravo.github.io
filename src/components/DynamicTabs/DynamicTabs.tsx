import * as React from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ListStyled, TabChildContainer, TabHRStyled, TabsStyled, VideoStyled } from "./DynamicTabs.styled";
import { SyntheticEvent, useState } from "react";
import styled from "@emotion/styled";
import { Link, ListItem, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TechLabelStyled, TechLogoStyled } from "./TechLogo.styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabDataProps {
  label: string;
  title: string;
  description: string;
  tech: {
    logo: string;
    text: string;
  }[];
  responsibilities?: string[];
  videoLink?: string;
  website: {
    label: string;
    link: string;
  };
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <TabChildContainer>
          <Box>{children}</Box>
        </TabChildContainer>
      )}
    </div>
  );
};

const DynamicTabs = ({ tabData }: any) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabPanelContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    minHeight: "400px",
    width: "100%",
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <TabsStyled
          value={value}
          onChange={handleChange}
          aria-label="basic TabsStyled example"
        >
          {tabData.map((data: { label: string }, i: number) => (
            <Tab label={data.label} key={`tab-${i}`} />
          ))}
        </TabsStyled>
      </Box>

      <TabHRStyled />

      {tabData.map((data: TabDataProps, i: number) => (
        <TabPanel value={value} index={i} key={`tabpanel-${i}`}>
          <TabPanelContainer>
            {data.title && (
              <Typography sx={{ marginBottom: "15px" }}>
                {data.title}
              </Typography>
            )}
            <Typography sx={{ fontSize: "14px", marginBottom: "20px" }}>
              {data.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0 40px 0",
                flexWrap: "wrap"
              }}
            >
              {data.tech.map(
                (tech: { logo: string; text: string }, i: number) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "20px 15px",
                        position: "relative",
                      }}
                      key={`${tech.logo} - ${i}`}
                    >
                      <TechLogoStyled
                        src={tech.logo}
                        alt={tech.text}
                        height="40"
                        width="40"
                      />
                      <TechLabelStyled>{tech.text}</TechLabelStyled>
                    </Box>
                  );
                }
              )}
            </Box>

            {data.responsibilities && (
              <>
                <Typography sx={{ fontWeight: 600, marginBottom: "15px" }}>
                  Responsibilities
                </Typography>
                {data.responsibilities.map((list) => {
                  return (
                    <ListStyled key={list}>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: "green" }} />
                        </ListItemIcon>
                        {list}
                      </ListItem>
                    </ListStyled>
                  );
                })}
              </>
            )}
            <Typography sx={{ marginTop: "60px" }}>
              Website:{" "}
              {data.website.link ? (
                <Link
                  href={data.website.link}
                  sx={{ fontSize: "15px" }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.website.label}
                </Link>
              ) : (
                "Hosting Soon"
              )}
            </Typography>
            {data.videoLink && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "60px",
                }}
              >
                <VideoStyled
                  src={data.videoLink}
                  autoPlay
                  loop
                  muted
                />
              </Box>
            )}
          </TabPanelContainer>
        </TabPanel>
      ))}
    </Box>
  );
};

export default DynamicTabs;
