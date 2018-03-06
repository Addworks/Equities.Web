import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

    constructor(public http: HttpClient) {
      
    }

    SubmitCustomer(idNumber, dob, gender, citizenship) {
        return this.http.get('http://equities.azurewebsites.net/Services/SubmitCustomer?idnumber=' + idNumber + '&dob=' + dob + '&gender=' + gender + '&citizenship=' + citizenship);
    }

    GetCitizenships() {
        return this.http.get('http://equities.azurewebsites.net/Services/GetCitizenships');
    }

    GetCustomers() {
        return this.http.get('http://equities.azurewebsites.net/Services/GetCustomers');
    }
}
