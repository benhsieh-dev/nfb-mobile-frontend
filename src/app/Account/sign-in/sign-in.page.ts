import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-me',
  // templateUrl: './me.page.html',
  templateUrl: './sign-in.page.html',
  // styleUrls: ['./me.page.scss'],
  styleUrls: ['./sign-in.page.scss'],
})
export class MePage implements OnInit {
  signInForm: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  type: boolean = true;

  constructor() {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      phone: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }

  changeType() {
    this.type = !this.type;
  }

  signIn() {
    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }
      console.log(this.signInForm.value);
  }

}
