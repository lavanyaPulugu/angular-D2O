import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit(): void {
  }

  login(){
  this.router.navigate(['Join Now']);
}
}

