import * as React from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabHRStyled, TabsStyled } from "./DynamicTabs.styled";
import { SyntheticEvent, useState } from "react";
import styled from "@emotion/styled";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
          <Typography>{children}</Typography>
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

      {tabData.map(
        (
          data: {
            content: string;
            client: string;
            website: object;
            description: string;
          },
          i: number
        ) => (
          <TabPanel value={value} index={i} key={`tabpanel-${i}`}>
            <TabPanelContainer>
              {data.client && (
                <Typography sx={{ marginBottom: "15px" }}>
                  {data.client}
                </Typography>
              )}
              <Typography sx={{ fontSize: "14px" }}>
                {data.description}
              </Typography>
            </TabPanelContainer>
          </TabPanel>
        )
      )}
    </Box>
  );
};

export default DynamicTabs;
