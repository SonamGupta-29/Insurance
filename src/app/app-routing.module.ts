import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { BuyandviewComponent } from './buyandview/buyandview.component';
import { CustomerpolicylistComponent } from './customerpolicylist/customerpolicylist.component';

const routes: Routes = [

  {path: 'login',component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'insurance', component:InsuranceComponent},
  {path: 'buyandview', component:BuyandviewComponent},
  {path: 'customerpolicylist', component:CustomerpolicylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
