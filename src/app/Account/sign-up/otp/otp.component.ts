import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {

  @ViewChild('otp1') input;
  otpString: string[] = ['', '', '', ''];
  isLoading = false;

  constructor() { }

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
