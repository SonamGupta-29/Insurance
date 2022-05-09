import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'

})
export class InsuranceService{
    baseUrl="http://localhost:8080/";
constructor(private http:HttpClient){
}
register(registerBody:any) {
    const url=`${this.baseUrl}register`
return this.http.post(url,registerBody);
}
getLogin(login:any){
    const url=`${this.baseUrl}login`
return this.http.post(url,login);
}
}