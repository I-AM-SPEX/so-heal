import { Href } from "expo-router";
const tabsPathMaker = (name: string) => {
  const tabPath = `/(tabs)/${name}` as Href;
  return tabPath;
};

export { tabsPathMaker };
