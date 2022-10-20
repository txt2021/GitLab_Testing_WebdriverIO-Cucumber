
const page = require('./page');


const search_input = ('input[placeholder="Search"]');
const search_text = "testing";
const searh_results_title = ('[class="search-results__header"]');
const devops_button = ('a[data-ga-name="DevOps"]');
const devops_title = ('div[class="copy"]>h1');
const devops_text = "What is DevOps?";
const gitlab_link = ('a[href="https://gitlab.com/users/sign_in/"]');


class SearchPage { 

        async enterSearchItem(){
           await page.setvalue(search_input,search_text);
        }

        async clickGitlabButton(){
           await page.click(gitlab_link);            
        }

        async clickdevopsButton(){
           await page.click(devops_button);        
        }

        async isresulttitleVisible(){
           await (expect(page.isdisplayed(searh_results_title)));
        }

        async isresulttitleCorrect(){
            await (expect(page.checkElement(searh_results_title,search_text)));
        }
        
        async isdevopsVisible(){
            await (expect(page.isdisplayed(devops_title)));
          }
  
        async isdevopsCorrect(){
            await (expect(page.checkElement(devops_title,devops_text)));
        }

        async urlAboutChecking(){
            await (expect(page.urlChecking('about')));
        }

        async urlDevopsChecking(){
            await (expect(page.urlChecking('devops')));
        }

        async urlSigninChecking(){
            await (expect(page.urlChecking('sign_in')));
        }
       
}
module.exports = new SearchPage();