import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../passwordvalidators';
import { InsuranceService } from '../Services/insurance.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // registerservice1: any;

  registrationForm1: FormGroup;
  InsuranceService: any;
  constructor(private router: Router, private fb: FormBuilder,private insuranceService:InsuranceService) {
    
    this.registrationForm1 = this.fb.group ({
      
      email: ['',Validators.required],
      password: ['',Validators.required]
      
    })
  }
  
ngOnInit(): void {
    
}

onnavigateLogin(){
  this.insuranceService.getLogin(this.registrationForm1.value)
   .subscribe((resi)=>{
     console.log(resi);
     
   })
   this.router.navigate(['/buyandview']);
 }

navigatesignup() {
  this.router.navigateByUrl('/registration');
};

}
function ngOnInit() {
throw new Error('Function not implemented.');
}








// function onLogin() {
//   throw new Error('Function not implemented.');
// }

