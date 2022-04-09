import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {

  @ViewChild('otp1') input;
  otpString: string[] = ['', '', '', ''];
  isLoading = false;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    setTimeout(() => {
      this.input.setFocus();
      console.log('enter');
    }, 500);
  }
  otp(event, prev, next, index) {
    console.log(event);
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.which ? event.which : event.keyCode);
    if (!pattern.test(inputChar)) {
      console.log('invalid character');
      event.preventDefault();
      this.otpString[index] = '';
      return;
    }
  }

}
