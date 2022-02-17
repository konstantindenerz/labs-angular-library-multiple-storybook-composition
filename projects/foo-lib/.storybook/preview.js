import { setCompodocJson } from "@storybook/addon-docs/angular";
// TODO Use https://github.com/storybookjs/storybook/blob/next/app/angular/src/builders/start-storybook/index.ts#L27-L28 instead
// import docJson from "../../../documentation.json";
// setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}
