import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {
    contacts = [
        { Id: '001', FirstName: 'Marc', LastName: 'Benioff', Email: 'marc.benioff@example.com' },
        { Id: '002', FirstName: 'Larry', LastName: 'Ellison', Email: 'larry.ellison@example.com' },
        { Id: '003', FirstName: 'Steve', LastName: 'Jobs', Email: 'steve.jobs@example.com' }
    ];
}
