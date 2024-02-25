import { css } from "react-strict-dom";

export const teal = css.defineVars({
  "100": "#E0F2F1",
  "200": "#B2DFDB",
  "300": "#80CBC4",
  "400": "#4DB6AC",
  "500": "#26A69A",
  "600": "#009688",
  "700": "#00897B",
  "800": "#00796B",
  "900": "#00695C",
});

export const grey = css.defineVars({
  "100": "#F5F5F5",
  "200": "#EEEEEE",
  "300": "#E0E0E0",
  "400": "#BDBDBD",
  "500": "#9E9E9E",
  "600": "#757575",
  "700": "#616161",
  "800": "#424242",
  "900": "#212121",
});

export const background = css.defineVars({
  neutral: grey[200],
  primary: teal[100],
});

export const onBackground = css.defineVars({
  neutral: grey[900],
  primary: teal[800],
});
