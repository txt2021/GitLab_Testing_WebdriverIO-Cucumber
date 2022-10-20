
const page = require('./page');

const user_firstname = ('[id="new_user_first_name"]');
const test_firstname = 'Tester';
const user_lastname = ('[id="new_user_last_name"]');
const test_surname = 'Smith';
const username = ('[id="new_user_username"]');
const test_name = 'tester_8976';
const user_email = ('[id="new_user_email"]');
const test_incorrect_email = 'fahafo5464';
const test_email = 'fahafo5464@civikli.com';
const password = ('[id="new_user_password"]');
const test_pass = 'testingpass';
const submit_button = ('[data-disable-with="Register"]');
const final_message = ('[class="gl-alert-body"]');
const email_message = ('[class="gl-field-error"]');
const capcha_text = "There was an error with the reCAPTCHA. Please solve the reCAPTCHA again.";
const email_text = "Please provide a valid email address.";
const signin_button = ('[href="/users/sign_in?redirect_to_referer=yes"]');
const firstname_error = ('[id="new_user_first_name"] ~[class="gl-field-error"]');
const lastname_error = ('[id="new_user_last_name"] ~[class="gl-field-error"]');
const empty_text = "This field is required.";
const saleforce_button = ('[href="/users/auth/salesforce"]');
const saleforce_form = ('[id="content"]');


class SignUpPage {

    async enterFirstname(){
        await page.setvalue(user_firstname,test_firstname);
        }

    async enterLastname(){
        await page.setvalue(user_lastname,test_surname);
        }
  
    async enterUsername() {
        await page.setvalue(username,test_name);
        }

    async enterEmail(){
        await page.setvalue(user_email,test_email);
        }
  
    async enterwrongEmail(){
        await page.setvalue(user_email,test_incorrect_email);
        }
  
    async enterPassword(){
        await page.setvalue(password,test_pass);
        }

    async clicksubmitButton(){
        await page.click(submit_button);
        }

    async clicksigninButton(){
        await page.click(signin_button);        
        }

    async clicksaleforceButton(){
        await page.click(saleforce_button);        
        }

    async ismessageVisible(){
        await (expect(page.isdisplayed(final_message)));
        }

    async isemailmessageVisible(){
        await (expect(page.isdisplayed(email_message)));
        }

    async ismessageCorrect(){
        await (expect(page.checkElement(final_message,capcha_text)));
        }

    async isemailmessageCorrect(){
        await (expect(page.checkElement(email_message,email_text)));
        }

    async isemptynameVisible(){
        await (expect(page.isdisplayed(firstname_error)));
        }
  
    async isemptysurnameVisible(){
        await (expect(page.isdisplayed(lastname_error)));
        }
  
    async isemptynameCorrect(){
        await (expect(page.checkElement(firstname_error,empty_text)));
        }
  
    async isemptysurnameCorrect(){
        await (expect(page.checkElement(lastname_error,empty_text)));
        }
  
    async issaleforceVisible(){
        await (expect(page.isdisplayed(saleforce_form)));
        }

    async urlUserChecking(){
        await (expect(page.urlChecking('users')));
        }

    async urlSignupChecking(){
        await (expect(page.urlChecking('sign_up')));
        }

    async urlSaleforceChecking(){
        await (expect(page.urlChecking('salesforce')));
        }


}

module.exports = new SignUpPage();
