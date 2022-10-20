const page = require('./page');


const expert_title = ('h1[data-aos="zoom-in-up"]');
const title_text = "Talk to an Expert";
const trial_title = ('main div[class="row"]>div:nth-child(1) h2');
const trial_text = "Free 30-day trial";
const trial_form = ('div[class="signup-page"]');
const experts_form = ('div[class="form_container"]');


class TrialPage{   
    
        async istitleCorrect(){
          await (expect(page.checkElement(expert_title,title_text)));
        }

        async istitleVisible(){
          await (expect(page.isdisplayed(expert_title)));
        }

        async istrialCorrect(){
            await (expect(page.checkElement(trial_title,trial_text)));
          }
  
        async istrialVisible(){
            await (expect(page.isdisplayed(trial_title)));
          }

        async istrialformVisible(){
            await (expect(page.isdisplayed(trial_form)));
          }

        async isexpertsformVisible(){
            await (expect(page.isdisplayed(experts_form)));
          }

        async urlSalesChecking(){
            await (expect(page.urlChecking('sales')));
            }

        async urlTrialChecking(){
            await (expect(page.urlChecking('trial_registrations')));
                }

}

module.exports = new TrialPage();