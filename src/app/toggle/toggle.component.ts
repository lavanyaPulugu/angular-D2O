import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

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
