import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { VisaNewsComponent } from './visa-news/visa-news.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VisaNewsComponent,
    FaqsComponent,
    AboutUsComponent,
    FooterComponent,
    JoinNowComponent,
    ToggleComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
