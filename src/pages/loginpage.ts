import{Page} from '@playwright/test';
import { BasePage } from './Basepage';
import locator from '../locators/locators.json';

 export class Loginpage extends BasePage
{
     constructor(page:Page)
      {
       super(page);
      }

   async  enteruserName(username:string)
   {
    await this.enterUserName(locator.login.username,username);
   }
      async enterpassword(password:string)
   {
    await this.enterPassword(locator.login.password,password);
   }
      async  clickButtn()
   {
    await this.buttonClick(locator.login.loginButn);
   }
      async  validationCorrect()
   {
    await this.validCred(locator.login.validCred);
   }
      async  validationinCorrect()
   {
    await this.invalidCred(locator.login.invalidCredentials);
   }



}