const page = require('./page');


const login_button = ('[id="supportDropdown"]');
const sign_up_button = ('[data-nav="register"]');
const whygitlab_button = ('[name="Why GitLab"]');
const whygit_form = ('[id="be-navigation-desktop"] h2');
const platform_button = ('[name="Platform"]');
const platform_form = ('[class="slp-row menu_row"] h2');
const solutions_button = ('[name="Solutions"]');
const solutions_form = ('[class="slp-container menu_container"] h2')
const pricing_button =('[name="Pricing"]');
const pricing_title = ('[tag="h1"]')
const partners_button = ('[name="Partners"]');
const partners_form = ('[class="slp-row menu_row"] h2');
const resources_button = ('[name="Resources"]');
const resources_form = ('[class="menu_left-column slp-col-md-3"] h2');
const expert_button = ('[name="Talk to an expert"]');
const trial_button = ('[name="Get free trial"]');
const search_button = ('button[aria-label="Search"]');

const why_text = " Why GitLab ";
const platform_text = " Platform ";
const solutions_text = " Solutions ";
const pricing_text = "Get The One  DevOps Platform"
const partners_text = " Partners ";
const resources_text = " Resources ";

class MainPage {


    async clickLoginButton(){
        await page.click(login_button);    
        }

    async clicksignupButton(){
        await page.click(sign_up_button);
        }

    async clickwhygitlabButton(){
        await page.click(whygitlab_button);
        }

    async clickplatformButton(){
        await page.click(platform_button);
        }

    async clicksolutionsButton(){
        await page.click(solutions_button);
        }

    async clickpricingButton(){
        await page.click(pricing_button);
        }

    async clickpartnersButton(){
        await page.click(partners_button);
        }

    async clickresourcesButton(){
        await page.click(resources_button);
        }

    async clickexpertsButton(){
        await page.click(expert_button);
        }

    async clicktrialButton(){
        await page.click(trial_button);
        }

    async clicksearchButton(){
        await page.click(search_button);
        }

    async iswhyformVisible(){
        await (expect(page.isdisplayed(whygit_form)));
        }

    async iswhyformCorrect(){
        await (expect(page.checkElement(whygit_form,why_text)));
        }

    async isplatformformVisible(){
        await (expect(page.isdisplayed(platform_form)));
        }

    async isplatformformCorrect(){
        await (expect(page.checkElement(platform_form,platform_text)));
        }

    async issolutionsformVisible(){
        await (expect(page.isdisplayed(solutions_form)));
        }

    async issolutionsformCorrect(){
        await (expect(page.checkElement(solutions_form,solutions_text)));
        }

    async ispricingtitleVisible(){
        await (expect(page.isdisplayed(pricing_title)));
        }

    async ispricingtitleCorrect(){
        await (expect(page.checkElement(pricing_title,pricing_text)));
        }

    async ispartnerformVisible(){
        await (expect(page.isdisplayed(partners_form)));
        }

    async ispartnersformCorrect(){
        await (expect(page.checkElement(partners_form,partners_text)));
        }

    async isresourcesformVisible(){
        await (expect(page.isdisplayed(resources_form)));
        }

    async isresourcesformCorrect(){
        await (expect(page.checkElement(resources_form,resources_text)));
        }

    async urlAboutChecking(){
        await (expect(page.urlChecking('about')));
        }

    async urlPricingChecking(){
        await (expect(page.urlChecking('pricing')));
        }

}
module.exports = new MainPage()