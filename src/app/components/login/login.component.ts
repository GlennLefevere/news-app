import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'news-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    username: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  })

  constructor(private readonly formBuilder: FormBuilder,
              private readonly userService: UserService,
              private readonly location: Location) {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if(this.loginForm.valid) {
      this.userService.loadUser();
      this.location.back();
    }
  }

  onCancel() {
    this.location.back();
  }

}
