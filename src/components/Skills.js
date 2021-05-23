import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell
} from "react-mdl";

const Skills = () => {
  const [tab, setTab] = useState(0);
  const toggleCategories = () => {
    console.log(tab);
    if (tab.tabId === 0) {
      return (
        <div>
          <h1>This is HTML</h1>
        </div>
      );
    } else if (tab.tabId === 1) {
      return (
        <div>
          <h1>This is CSS</h1>
        </div>
      );
    } else if (tab.tabId === 2) {
      return (
        <div>
          <h1>This is JS</h1>
        </div>
      );
    } else if (tab.tabId === 3) {
      return (
        <div>
          <h1>This is ReactJS</h1>
        </div>
      );
    }
  };
  return (
    <div className="category-tabs">
      <Tabs tab={tab} onChange={(tabId) => setTab({ tabId })}>
        <Tab className="skills-color" style={{ color: "white" }}>
          HTML
        </Tab>
        <Tab className="skills-color" style={{ color: "white" }}>
          CSS
        </Tab>
        <Tab className="skills-color" style={{ color: "white" }}>
          JS
        </Tab>
        <Tab className="skills-color" style={{ color: "white" }}>
          ReactJS
        </Tab>
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
