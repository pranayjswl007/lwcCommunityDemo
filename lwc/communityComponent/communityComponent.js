import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

export default class ComMeetingHeader extends LightningElement {
    @api recordId;

  @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME] })
  record;

  get meetingData() {
    return getFieldValue(this.record.data, ACCOUNT_NAME);
  }
}