import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountDetails extends NavigationMixin (LightningElement)  {
    
    value = '.'
    account = '.'
    routing = '.'
    matches ='.'
    show = false
    hide = true
    done = false

    @track selectedStep = "step1"
    isDisabled = true
    
    get options() {
        return [
            { label: 'Checking/Money Market', value: 'checking' },
            { label: 'Savings', value: 'savings' },
        ];
    }

    //handles add account inputs
    handleType(event) {
        this.value = event.detail.value;
    }

    handleAccount(event) {
        this.account = event.detail.value;
    }
    handleRouting(event) {
        this.routing = event.detail.value;
    }
    handleConfim(event) {
        if(event.detail.value == this.account){
            this.matches = "Matches"
        } else{
            this.matches = "does not match"
        }
    }
    
    //handles current page
    //goes to confirm page and validates
    nextConfirm(){
        if ((this.value && this.routing && this.account === '.') &&  (this.matches == "does not match")){
            console.log("failed")
        } else if(this.matches == "Matches") {
            console.log("success")
            this.show = true
            this.hide = false
            this.selectedStep = "step2"
        }
        
    }
    //goes to account page
    backAccount(){
        this.hide = true
        this.show = false
        this.selectedStep = "step1"
    }
    //goes to last step
    addAccount(){
        this.done = true
        this.show = false
        this.hide = false
        this.selectedStep = "step3"
    }


    //handles confrim input
    handleCheck(event){
        if(event.target.checked){
            this.isDisabled = false
        } else {
            this.isDisabled = true
        }
    }

    
}