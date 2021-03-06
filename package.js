Package.describe({
  name: 'pierreeric:orion-lang-fr',
  version: '1.3.0',
  summary: 'Orion - French language',
  git: 'https://github.com/PEM--/orion-lang-fr',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'coffeescript',
    'anti:i18n@0.4.3',
    'softwarerero:accounts-t9n@1.1.3',
  ]);
  api.imply('anti:i18n@0.4.3');

  api.addFiles('fr.coffee');
});
