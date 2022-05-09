import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../passwordvalidators';
import { InsuranceService } from '../Services/insurance.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  registrationForm: FormGroup;
  submitted:boolean=false;
  
    constructor(private router: Router, private fb: FormBuilder,private registerservice:InsuranceService) { 
      this.registrationForm = this.fb.group({
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        phoneNumber:[
          '',
          [
            Validators.required,
            Validators.min(10000000000),
            Validators.min(99999999999),        ]
          ],
         
          email: ['',Validators.required],
        password:['',Validators.required],
        confirmPassword:['',Validators.required]
      },{validator: PasswordValidator})  
    }
   
  
    ngOnInit(): void {
    }
    onRegister(){

      this.registerservice.register(this.registrationForm.value)
      .subscribe((res)=>{
        console.log(res);
        this.router.navigateByUrl('/login');
      })
    }
    // OnSubmit() {
      
    //     this.registrationForm.patchValue({
        
          
          
    //     });
      }
    

