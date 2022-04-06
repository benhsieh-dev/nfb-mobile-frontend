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
  otp(event) {
  }

}
