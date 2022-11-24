import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  global: {
    body: {
      bg: {
        light: "#faf4ed",
        dark: "#232136",
      },
      default: {
        light: "#575279",
        dark: "#e0def4",
      },
    },
  },
  components: {
    Drawer: {
      dialog: {
        light: "white",
        dark: "#141214",
      },
    },
  },
};

const styles = {
  global: (props: any) => ({
    body: {
      color: mode(
        colors.global.body.default.light,
        colors.global.body.default.dark
      )(props),
      bg: mode(colors.global.body.bg.light, colors.global.body.bg.dark)(props),
    },
  }),
};

const components = {
  Drawer: {
    baseStyle: (props: any) => ({
      dialog: {
        bg: mode(
          colors.components.Drawer.dialog.light,
          colors.components.Drawer.dialog.dark
        )(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;
