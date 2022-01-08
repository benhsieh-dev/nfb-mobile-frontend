import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  type: boolean = true;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
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

  signUp() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
      console.log(this.form.value);
    }
  }
}
