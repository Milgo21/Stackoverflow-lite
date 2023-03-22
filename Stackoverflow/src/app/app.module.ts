import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './State/Reducers/userReducer';
import { UserEffects } from './State/Effects/userEffects';
import { TokenInterceptorService } from './Services/token/token-interceptor.service';



@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FooterComponent,
        HeaderComponent,
        HttpClientModule,
        StoreModule.forRoot({user:userReducer}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([UserEffects])
    ]
    // providers:[],


})
export class AppModule { }