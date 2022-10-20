const page = require('./page');

const contact_button = ('ul[class="support-dropdown_item"] li>a[href="/support/"]');
const contact_result = ('div[role="main"] h1');
const contact_result_text = "GitLab Support";
const gethelp_button = ('ul[class="support-dropdown_item"] li>a[href="/get-help/"]');
const gethelp_result_text = "Help Topics";
const services_button = ('ul[class="support-dropdown_item"] li>a[href="/services/"]');
const services_result = ('div[class="blank-header"] h1');
const services_result_text = "GitLab Professional Services";
const sales_button = ('ul[class="support-dropdown_item"] li>a[href="/sales/"]');
const sales_result = ('h1[data-aos="zoom-in-up"]');
const sales_result_text = "Talk to an Expert";
const register_button = ('[data-nav="register"]');
const register_form = ('div[class="signup-page"]');


class SupportPage{   
   
        async clickcontsctButton(){
            await page.click(contact_button);        
        }

        async clickgethelpButton(){
            await page.click(gethelp_button);        
        } 
        
        async clickservicesButton(){
            await page.click(services_button);        
        }

        async clicksalesButton(){
            await page.click(sales_button);        
        }

        async clickregisterButton(){
            await page.click(register_button);        
        }

        async isresultVisible(){
            await (expect(page.isdisplayed(contact_result)));
        }
  
        async iscontactCorrect(){
            await (expect(page.checkElement(contact_result,contact_result_text)));
        }
        
        async isgethelpCorrect(){
            await (expect(page.checkElement(contact_result,gethelp_result_text)));
        }
        
        async isservicesVisible(){
            await (expect(page.isdisplayed(services_result)));
        }
  
        async isservicesCorrect(){
            await (expect(page.checkElement(services_result,services_result_text)));
        }
       
        async issalesVisible(){
            await (expect(page.isdisplayed(sales_result)));
        }
  
        async issalesCorrect(){
            await (expect(page.checkElement(sales_result,sales_result_text)));
        }
        
        async isregisterformVisible(){
            await (expect(page.isdisplayed(register_form)));
        }

        async urlSupportChecking(){
            await (expect(page.urlChecking('support')));
        }

        async urlGethelpChecking(){
            await (expect(page.urlChecking('get-help')));
        }

        async urlServicesChecking(){
            await (expect(page.urlChecking('services')));
        }

        async urlSalesChecking(){
            await (expect(page.urlChecking('sales')));
        }

        async urlSignupChecking(){
            await (expect(page.urlChecking('sign_up')));
        }

       
}
module.exports = new SupportPage();