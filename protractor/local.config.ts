import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/*.spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
