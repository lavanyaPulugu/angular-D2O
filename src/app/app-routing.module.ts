import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { VisaNewsComponent } from './visa-news/visa-news.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { ToggleComponent } from './toggle/toggle.component';

const routes: Routes = [
{ path: '', component:HomeComponent},
{path: 'About', component:AboutUsComponent},
{ path: 'FAQs', component:FaqsComponent},
{ path: 'Home', component:HomeComponent},
{ path:'Join Now', component:JoinNowComponent},
{ path: 'Visa News', component:VisaNewsComponent},
{ path: 'toggles', component:ToggleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
