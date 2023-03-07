import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginComponent } from "./components/login/login.component";
import { AskquestionComponent } from "./components/questions/askquestion/askquestion.component";
import { UpdatequestionComponent } from "./components/questions/updatequestion/updatequestion.component";
import { RegisterComponent } from "./components/register/register.component";


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        LoginComponent,
        AskquestionComponent,
        UpdatequestionComponent,
        RegisterComponent
    ]
})
export class AppModule { }
