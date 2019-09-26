class ContentScript {
  constructor() {}
  
  buttonClicked() {
    this.startEmberApp();
  },
  
  startEmberApp() {
    require('ember-chrome-extension-template/app')['default'].create({ rootElement: '#chrome-app' });
  }
}

let contentScript = new ContentScript();