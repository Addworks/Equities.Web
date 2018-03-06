import { Component, OnInit } from '@angular/core';
//import { Customer } from '/customer';
import { ApiProvider } from '../providers/api/api';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Equities Integration';
    ErrorMessage = '';

    private genderList: string[];
    private citizenshipList: Observable<any>;
    private customersList: Observable<any>;

    response: Observable<any>;

    form: FormGroup;

    constructor(private formBuilder: FormBuilder, public apiProvider: ApiProvider) { }

    ngOnInit() {
        this.genderList = ['Male', 'Female', 'Others'];
        //citizenship

        this.citizenshipList = this.apiProvider.GetCitizenships();

        this.customersList = this.apiProvider.GetCustomers();

        this.form = this.formBuilder.group({
            idNumber: [null, [Validators.required]],
            gender: [null, Validators.required],
            citizenship: [null, Validators.required],
            dob: [null, Validators.required],
        });
    }

    onSubmit() {
        console.log(this.form.get('idNumber').value);
        this.response = this.apiProvider.SubmitCustomer(this.form.get('idNumber').value, this.form.get('dob').value, this.form.get('gender').value, this.form.get('citizenship').value);
        //this.ErrorMessage = this.response.Code;
        debugger;
        this.customersList = this.apiProvider.GetCustomers();

    }
}
