import{page} from '../hooks/hooks';
import{Given, When, Then} from '@cucumber/cucumber';
import{Loginpage} from '../pages/loginpage';

let login:Loginpage;


Given('user navigate on {string}',async  function (url:string) {
  
    login=new Loginpage(page);
    await login.navigateToUrl(url);
});

When('user entered username as {string}',async function (username:string) {
  await login.enteruserName(username);
});

When('user entered password as {string}',async function (password:string) {
   await login.enterpassword(password)
});

When('user clicks the login button',async function () {
  await login.clickButtn();
});

Then('user navigates to next page',async function () {
   
    await login.validationCorrect();

});
Then ('user will get invalid credentials',async function(){

     await login.validationinCorrect();

});