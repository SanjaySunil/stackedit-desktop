import README from "readme-components";
import package_data from "../package.json" assert { type: "json" };

let template = new README();

template.use_premade("header", {
  name: package_data.name,
  description: package_data.description,
  report_bug: package_data.bugs.url,
  request_feature: "https://github.com/SanjaySunil/stackedit-desktop/issues/new?assignees=&labels=Suggestions&template=suggestions.md&title=%5BSUGGESTION%5D",
});

template.use_premade("description", {
  name: package_data.name,
  long_description:
    "is an unofficial electron desktop app for StackEdit. This app loads the StackEdit web editor into a browser window using the Electron framework.",
});

template.use_component("./components/usage.md", {
  long_description:
    "is an unofficial electron desktop app for StackEdit. This app loads the StackEdit web editor into a browser window using the Electron framework.",
  package: package_data.name,
  author: package_data.author.name,
  email: package_data.author.email,
  license: package_data.license,
});

template.use_premade("license", {
  author: package_data.author.name,
  email: package_data.author.email,
  license: package_data.license,
});

template.make_readme();
