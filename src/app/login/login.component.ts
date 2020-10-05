import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  login: any = { username: '', password: '' };
  userName: string;
  password: string;
  constructor( private router: Router) { }

  ngOnInit() {}

  submit() {

    console.log('user name:', this.login.username );
    console.log('user password', this.login.password );
    if (!this.login.username || !this.login.password){
      alert('Enter Username and Password');
      return;
    }
    if (this.login.username.toLowerCase() !== 'neetu' || this.login.password.toLowerCase() !== '1234'){
      alert('Invalid username or Password');
      return;
    }

    this.router.navigateByUrl('tabs');
  }

}
