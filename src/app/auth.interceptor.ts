import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJFLUNPTU1FUkNFIiwic3ViIjoianVsaW5oYUBnbWFpbC5jb20iLCJleHAiOjE2OTM2NzQ2MTV9.uPPIN4F3D6FjYhryvlEhWpSmCZwGljNP5PRMC8--2Ok"
    console.log('Headers before request:', request.headers);
    debugger
    if (token) {
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });


      console.log('Authorization Header:', authReq.headers.get('Authorization'));
      return next.handle(authReq);
    } else {
      // Handle the case where the token is not available
      return next.handle(request);
    }
  }

}
