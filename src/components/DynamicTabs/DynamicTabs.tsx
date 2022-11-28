import * as React from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabHRStyled, TabsStyled } from "./DynamicTabs.styled";
import { SyntheticEvent, useState } from "react";
import styled from "@emotion/styled";
import { Link, List, ListItem, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabDataProps {
  label: string;
  title: string;
  description: string;
  responsibilities?: string[];
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
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
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

            <Typography sx={{ marginBottom: "20px" }}>
              Website:{" "}
              {data.website.link ? (
                <Link href={data.website.link} sx={{ fontSize: "15px" }}>
                  {data.website.label}
                </Link>
              ) : (
                "Under Construction"
              )}
            </Typography>

            <Typography sx={{ marginBottom: "20px" }}>
              Project Tech:{" "}
            </Typography>

            {data.responsibilities && (
              <>
                <Typography sx={{ fontWeight: 600, marginBottom: "15px" }}>
                  Responsibilities
                </Typography>
                {data.responsibilities.map((list) => {
                  return (
                    <List key={list} sx={{ marginLeft: "35px" }}>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: "green" }} />
                        </ListItemIcon>
                        {list}
                      </ListItem>
                    </List>
                  );
                })}
              </>
            )}
          </TabPanelContainer>
        </TabPanel>
      ))}
    </Box>
  );
};

export default DynamicTabs;
