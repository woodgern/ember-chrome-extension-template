#ember-chrome-extension-template
This repository is a template for an ember chrome extension to get you started with your chrome extension project!


##Getting started

##Clone this repository
```
git clone https://github.com/woodgern/ember-chrome-extension-template.git
```

##Install dependencies
Make sure you ave npm installed on your machine
```
cd ember-chrome-extension-template
npm install
```

##Build your ember app
This automatically moves the packages to your extension directory
```
ember serve
```

##Add your chrome extension to your browser
Here you will need to navigate to `chrome://extensions` in your browser, make sure 'Developer mode' is on in the top right.

Next, click 'Load unpacked' and select the `./ember-chrome-extension-template/chrome` folder

And the template is added to your browser! If you click the ember icon on the right side of your navbar, you should see
the text 'Here is your chrome extension, in Ember!' appear in an extension popover.
