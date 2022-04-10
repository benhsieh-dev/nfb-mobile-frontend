import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { OtpComponent } from './otp/otp.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signUpForm: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  type: boolean = true;
  verified = false;
  verifiedNumber: any;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
    ) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
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
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
     console.log(this.signUpForm.value);
  }

  async verifyViaOtp() {
    console.log('otp', this.signUpForm.value);
    const phoneNumber = this.signUpForm.value.phone;
    if (phoneNumber && phoneNumber?.length === 10) {
      const options: any = {
        component: OtpComponent
      };
      const modal = await this.modalCtrl.create(options);
      await modal.present();
      const { data } = await modal.onWillDismiss();
      if(data) {
        console.log('otp: ', data);
        this.verified = true;
        this.verifiedNumber = phoneNumber;
     }
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Please enter proper phone number',
        duration: 5000,
        color: 'danger'
      });
      toast.present();
    }
    }

    changeNumber(event) {
      const phoneNumber = this.signUpForm.value.phone;
      if (this.signUpForm.value) {
        if (this.verifiedNumber && phoneNumber !== this.verifiedNumber) {
          this.verified = true;
        } else {
          this.verified = false;
        }
      }
    }
  }
