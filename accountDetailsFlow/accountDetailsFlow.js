import { LightningElement, track } from 'lwc';

export default class AccountDetailsFlow extends LightningElement {
    value = ''
    account = ''
    routing = ''
    matches =''
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
    nextConfirm(){
        this.show = true
        this.hide = false
        this.selectedStep = "step2"
    }

    backAccount(){
        this.hide = true
        this.show = false
        this.selectedStep = "step1"
    }
    addAccount(){
        this.done = true
        this.show = false
        this.hide = false
        this.selectedStep = "step3"
    }

}