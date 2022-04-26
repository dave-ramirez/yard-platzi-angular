import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this._http.post<Auth>(`${this.apiUrl}/login`, {  email, password })
      .pipe(
        tap(response => this._tokenService.saveToken(response.access_token))
      )
  
  }

  profile(token: string) {
    /*let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);*/
    return this._http.get<User>(`${this.apiUrl}/profile`);
  }

}
