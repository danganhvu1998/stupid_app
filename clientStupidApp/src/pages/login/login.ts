import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  valTesting: string;

  @ViewChild('username') username;
  @ViewChild('password') password;
  @ViewChild('rememberMe') rememberMe;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.valTesting = "What the hell?";
    console.log(this.valTesting);
  }

  loadDoc(type) {
    console.log("loadDoc running!");
    var xhttp = new XMLHttpRequest();
    if(type!="GET"){
      console.log("POST METHOD")
      var data = "username="+this.username.value
        +"&password="+this.password.value
        +"&rememberMe="+this.rememberMe.value;
      console.log("Data:", data);
      xhttp.onreadystatechange = function() {
        console.log("loadDoc ... ", this.readyState, this.status)
        if (this.readyState == 4 && this.status == 200) {
           console.log("Taken value: ", this.responseText);
        }
      };
      xhttp.open("POST", "http://localhost:8000/api/test/", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      //xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(data);
    } else {
      console.log("GET METHOD");
      xhttp.onreadystatechange = function() {
        console.log("loadDoc ... ", this.readyState, this.status)
        if (this.readyState == 4 && this.status == 200) {
          console.log("Taken value: ", this.responseText);
          return this.responseText;
        }
      };
      xhttp.open("GET", "http://localhost:8000/api/test?"
        +"username="+this.username.value
        +"&password="+this.password.value
        +"&rememberMe="+this.rememberMe.value, true);
      xhttp.send();
    }
  }

  requestServer(userRequest){
    console.log(this.username.value, this.password.value, this.rememberMe.value, userRequest); 
    this.loadDoc("POST");
    if( this.username.value =='conmaxau' && this.password.value=='whatever'){
      console.log("Login Success!");
      this.navCtrl.setRoot(HelloIonicPage);
    } else {
      console.log("Login Fail! correct password is 'whatever' and correct username is 'conmaxau'");
    }
  }

}
