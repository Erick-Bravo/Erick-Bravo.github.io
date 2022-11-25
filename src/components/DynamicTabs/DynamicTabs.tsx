import * as React from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabHRStyled, TabsStyled } from "./DynamicTabs.styled";
import { SyntheticEvent, useState } from "react";

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

const DynamicTabs = ({ tabsData }: any) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <TabsStyled
          value={value}
          onChange={handleChange}
          aria-label="basic TabsStyled example"
        >
          {tabsData.map((data: { label: string }) => (
            <Tab label={data.label} />
          ))}
        </TabsStyled>
      </Box>

      <TabHRStyled />

      {tabsData.map((data: { content: number }, i: number) => (
        <TabPanel value={value} index={i}>
          {`${data.content} ${i}`}
        </TabPanel>
      ))}
    </Box>
  );
};

export default DynamicTabs;
