import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { filter } from './filter/filter';
import { TitlePipe } from './title.pipe';
import { ComponentnotfoundComponent } from './componentnotfound/componentnotfound.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    HomeComponent,
    InsertdataComponent,
    AboutusComponent,
    DashboardComponent,
    LoginComponent,
    filter,
    TitlePipe,
    ComponentnotfoundComponent,
    DetailsComponent,
    UpdateComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
