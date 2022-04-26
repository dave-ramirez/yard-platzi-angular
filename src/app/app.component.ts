import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private _authService: AuthService,
    private _userService: UsersService
  ) {

  }


  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUsers() {
    this._userService.createUsers({
      name: 'Sebas',
      email: 'sebas@email.com',
      password: '12345'
    })
    .subscribe(rta => {
      console.log(rta)
    })
  }

  login() {
    this._authService.login('sebas@email.com', '12345')
    .subscribe(rta => {
      this.token = rta.access_token;
    })
  }

  getProfile() {
    this._authService.profile(this.token)
      .subscribe(profile => {
        console.log(profile)
      })
  }

}
