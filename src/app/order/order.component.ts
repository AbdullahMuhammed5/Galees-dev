import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClientModule) { }

  // tslint:disable-next-line: member-ordering
  signupUser: FormGroup;
  // Array to push imgs
  // tslint:disable-next-line: member-ordering

  ngOnInit() {
    this.signupUser = this.formBuilder.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postal: ['', [Validators.required]],
      phone: ['', [Validators.required, CustomValidators.digits]],
      addition: ['']
    });
  }

  onSubmit(form) {
    console.log(form.value);

    // function to be used to send data to DB
    // this.http.get('').subscribe(data => console.log(data);
    // )
  }

}
