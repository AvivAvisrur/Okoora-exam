import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup | undefined;
  isLoggedIn = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl(null, Validators.required),
    });
  }

  onSignIn() {
    console.log('onSignIn');

    this.userService.getUsers(this.signInForm?.value.username).subscribe(res => {
      
    })
  }
}
