import React from "react";
import { AppBar, Tabs, Tab, Typography, Fab, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./tabsCss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  const css = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={css.tabPanel}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function SimpleTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const css = useStyles();

  return (
    <div className={css.container}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={css.tab}
        >
          <Tab label="Dives" {...a11yProps(0)} />
          <Tab label="Dive Buddies" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
        <Fab className={css.fab} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </TabPanel>
    </div>
  );
}
