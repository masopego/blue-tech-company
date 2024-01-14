import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import CustomTabPanel from "../../components/CustomTabPanel/customTabPanel";
import { Creators } from "./components/Creators/creators";
import { SocialResponsability } from "./components/SocialResponsability/socialResponsability";
import { Idea } from "./components/Idea/idea";
import { Footer } from "../../components/Footer/footer";

import { TABS } from "./content/literals";
import { Header } from "../../components/Header/header";

export const AboutUs: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) =>
    setCurrentTab(newValue);

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="about-us"
          >
            {TABS.map((tab, index) => (
              <Tab label={tab} {...a11yProps(index)} key={tab} />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={currentTab} index={0}>
          <Creators />
        </CustomTabPanel>
        <CustomTabPanel value={currentTab} index={1}>
          <Idea />
        </CustomTabPanel>
        <CustomTabPanel value={currentTab} index={2}>
          <SocialResponsability />
        </CustomTabPanel>
      </Box>
      <Footer />
    </>
  );
};
