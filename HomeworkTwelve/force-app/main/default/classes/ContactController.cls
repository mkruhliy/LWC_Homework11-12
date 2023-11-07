public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(String accountId) {
        return [SELECT Id, Name, Title, Email, Phone FROM Contact WHERE AccountId = :accountId];
    }

    @AuraEnabled
    public static void createContact(String accountId, String lastName) {
        Contact newContact = new Contact();
        newContact.AccountId = accountId;
        newContact.LastName = lastName;
        insert newContact;
    }
}
