class DropBoxController {

    constructor() {

        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFIlesEl = document.querySelector('#files');
        this.snackModalEl = document.querySelector('#react-snackbar-root')

        this.initEvents();


    }


    initEvents() {

        this.btnSendFileEl.addEventListener('click', event => {

            this.inputFIlesEl.click();

        });

        this.inputFIlesEl.addEventListener('change',event =>{

            console.log(event.target);

        });
        


    }



}