import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
 

}
