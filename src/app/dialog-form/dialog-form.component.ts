import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {
myForm: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postalcode: ['', [Validators.required]],
      info: ['', [Validators.required]]
    });
    }
  }


