import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell
} from "react-mdl";

const Skills = () => {
  const [tab, setTab] = useState("0");
  const toggleCategories = () => {
    if (tab === 0) {
      return (
        <div>
          <h1>This is HTML</h1>
        </div>
      );
    } else if (tab === 1) {
      return (
        <div>
          <h1>This is CSS</h1>
        </div>
      );
    } else if (tab === 2) {
      return (
        <div>
          <h1>This is JS</h1>
        </div>
      );
    } else if (tab === 3) {
      return (
        <div>
          <h1>This is ReactJS</h1>
        </div>
      );
    }
  };
  return (
    <div className="category-tabs">
      <Tabs tab={tab} onChange={(tabId) => setTab({ tab: tabId })} ripple>
        <Tab>HTML</Tab>
        <Tab>CSS</Tab>
        <Tab>JS</Tab>
        <Tab>ReactJS</Tab>
      </Tabs>
      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategories()}</div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Skills;
