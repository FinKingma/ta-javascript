import { Given, When } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';

Given('I have opened the hotel app', async function (this: ICustomWorld) {
  await this.page?.goto('http://adactinhotelapp.com/index.php');
});

When('I login with my credentials', async function (this: ICustomWorld) {
  await this.page?.fill('#username', 'finkingma');
  await this.page?.fill('#password', 'MIG35D');
  await this.page?.click('#login');
});