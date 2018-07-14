import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  pass = '';
  user = '';
  msgs = [];
  ngOnInit() {
  }
login( usr , pwd ) {
    if (usr === 'Admin' && pwd === 'admin') {
      window.location.href = 'Admin';
    } else {
      // window.alert('Invalid credentials!');
      this.msgs.push({severity: 'error', summary: 'Invalid Credentials', detail: 'Check your username/password'});
    }
}
}
