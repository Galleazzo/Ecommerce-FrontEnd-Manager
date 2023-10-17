import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token: string;

    setToken(token: string) {
        this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJFLUNPTU1FUkNFIiwic3ViIjoianVsaW5oYUBnbWFpbC5jb20iLCJleHAiOjE2OTM2NzQ2MTV9.uPPIN4F3D6FjYhryvlEhWpSmCZwGljNP5PRMC8--2Ok";
    }

    getToken(): string {
        return this.token;
    }
}