import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";

export enum TabValue {
  All = "all",
  Spicy = "spicy",
  Vegan = "vegan",
}

export interface FilterTabsProps {
  value: TabValue;
  onChange: (value: TabValue) => void;
}

export function FilterTabs({ value, onChange }: FilterTabsProps) {
  // '_' Silences "unused variable" warnings from linters or the TypeScript compiler's --noUnusedParameters flag. Function still requires this prop
  const handleChange = (_: React.SyntheticEvent, newValue: TabValue) => {
    onChange(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="burger filters"
    >
      {Object.values(TabValue).map((category) => (
        <Tab
          key={category}
          label={category[0].toUpperCase() + category.slice(1)}
          value={category}
        />
      ))}
    </Tabs>
  );
}
