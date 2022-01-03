import { LightningElement, track} from 'lwc';

export default class ProgressIndicator extends LightningElement {

    show = false
    hide = true
    done = false

    @track selectedStep = "step1"

    selectAccount(){
        this.selectedStep = "step1"
        this.show = false
        this.hide = true
    }
    selectConfirm(){
        this.selectedStep = "step2"
        this.show = true
        this.hide = false
    }

}