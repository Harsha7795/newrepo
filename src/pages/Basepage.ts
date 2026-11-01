import{Page} from '@playwright/test';
import{expect} from '@playwright/test';


export class BasePage
{
  page:Page;
    
       constructor(page:Page)
      {
       this.page=page;
      }

      async navigateToUrl(url:string)
      {
        await this.page.goto(url);
      }
      async enterUserName(locator:string,value:string)
      {
        await this.page.locator(locator).fill(value);
      }
      async enterPassword(locator:string,value:string)
      {
        await this.page.locator(locator).fill(value);
      }
      async buttonClick(locator:string)
      {
         await this.page.locator(locator).click();
      }
      async validCred(locator:string)
      {
         await expect(this.page.locator(locator)).toBeVisible();
      }
      async invalidCred(locator:string)
      {
         await expect(this.page.locator(locator)).toBeVisible();
      }








}