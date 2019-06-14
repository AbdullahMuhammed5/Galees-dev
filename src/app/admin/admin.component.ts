import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private route: Router) { }
  hide = true;
  loginAsAdmin: FormGroup;
  ngOnInit() {
    this.loginAsAdmin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(form) {
    console.log(form.value);
    this.route.navigate(['admin']);

  }
}
