import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComponentnotfoundComponent } from './componentnotfound/componentnotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'insertdata', component: InsertdataComponent },
  { path: 'update', component:UpdateComponent },
  { path: 'checkbox', component:CheckboxComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details', component: DetailsComponent},
  { path: 'details/:id', component:DetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ComponentnotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
