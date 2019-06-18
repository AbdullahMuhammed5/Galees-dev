import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {
myForm: FormGroup;
  constructor( private fb: FormBuilder, private dialogRef: MatDialog, Http: HttpClient) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      info: ['', [Validators.required]]
    });
    }
    onSubmit(myForm) {
      console.log(myForm.value);
      // this.http.post("backendURL", myForm.value);
      this.dialogRef.closeAll();
    }
  }



