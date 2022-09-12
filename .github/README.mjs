import README from 'readme-components';
import package_data from '../package.json' assert { type: 'json' };

let template = new README();

template.use_component('./components/template.md', {
  name: package_data.name,
  description: package_data.description,
  report_bug: package_data.bugs.url,
  request_feature: package_data.bugs.url,
  long_description: 'is an unofficial electron desktop app for StackEdit. This app loads the StackEdit web editor into a browser window using the Electron framework.',
  package: package_data.name,
  author: package_data.author.name,
  email: package_data.author.email,
  license: package_data.license
});

template.make_readme();
