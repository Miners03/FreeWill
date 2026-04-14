import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
themes: ["night","cupcake","forest",
  "synthwave","retro","cyberpunk","valentine",
  "halloween","garden","lofi","pastel","fantasy",
  "wireframe","black","luxury","dracula","cmyk",
  "autumn","business","acid","lemonade","night"],
  },
};