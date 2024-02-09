import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  home(){

  this.router.navigate(['/Home']);
  }
  visa(){
this.router.navigate(['/Visa News']);
  }
  faq(){
 this.router.navigate(['/FAQs']);
  }
  about(){
 this.router.navigate(['/About']);
  }
 

  login(){
    this.router.navigate(['/Join Now']);
  }

  toggle(){
    this.router.navigate(['/toggle']);
  }
}
 
   
  
