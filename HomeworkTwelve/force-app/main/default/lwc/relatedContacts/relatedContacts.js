import { LightningElement, api, wire, track } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getRelatedContacts from '@salesforce/apex/ContactController.getRelatedContacts';
import createContact from '@salesforce/apex/ContactController.createContact';

export default class RelatedContacts extends LightningElement {
    @api recordId;
    contacts;
    showContactForm = false;
    newContactLastName = '';

    @wire(getRelatedContacts, { accountId: '$recordId' })
    contacts;

    handleAddContact() {
        this.showContactForm = true;
    }

    handleLastNameChange(event) {
        this.newContactLastName = event.target.value;
    }

    handleSaveContact() {
        createContact({ accountId: this.recordId, lastName: this.newContactLastName })
            .then(() => {
                this.showContactForm = false;
                return refreshApex(this.contacts);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
