import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'

})
export class InsuranceService{
  getInsuranceDetail(value: any) {
    throw new Error('Method not implemented.');
  }
    baseUrl="http://localhost:8080/";
constructor(private http:HttpClient){
}


register(registerBody:any) {
    const url=`${this.baseUrl}register`
return this.http.post(url,registerBody);
}

getLogin(login:any){   //login
    const url=`${this.baseUrl}login`//end point
return this.http.post(url,login);
}

getInsurance(){
const url=`${this.baseUrl}policy`
return this.http.get(url);
}

getCustomerPolicy(customerPolicy:any){
    const url=`${this.baseUrl}fetch-customer-policy`
    return this.http.get(url);
}
}