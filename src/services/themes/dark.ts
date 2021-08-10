import { Theme } from "../../types/themes";

const dark: Theme = {
  id: 0,
  colors: {
    layout: {
      darkest: "rgb(38, 38, 38)",
      darker: "rgb(49, 49, 49)",
      dark: "rgb(55, 55, 55)",
      light: "rgb(30, 30, 30)",
      lighter: "rgb(150, 150, 150)",
      lightest: "rgb(255, 255, 255)",
    },
    text: {
      lightest: "rgb(255, 255, 255)",
      lighter: "rgb(210, 210, 210)",
      light: "rgb(170, 170, 170)",
      dark: "rgb(135, 135, 135)",
      darker: "rgb(100, 100, 100)",
      darkest: "rgb(0, 16, 17)",
    },
    accent: {
      light: "rgb(255, 66, 0)",
      dark: "rgb(216, 59, 4)",
      red: "rgb(214, 48, 49)",
    },
  },
};

export default dark;
