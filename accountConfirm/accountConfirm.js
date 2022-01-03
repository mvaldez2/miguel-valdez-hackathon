import { LightningElement, api, track} from 'lwc';

export default class AccountConfirm extends LightningElement {
    @api routing
    @api account
    @api type
    @api show
    @api step
    hide 
    isDisabled = true
    @track selectedStep = "step1"

    handleChange(){
        this.hide = false
        const event = new CustomEvent("getvalue", {
            detail: false
        })
        this.dispatchEvent(event)
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