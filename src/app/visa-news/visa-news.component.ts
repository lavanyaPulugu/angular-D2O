import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visa-news',
  templateUrl: './visa-news.component.html',
  styleUrls: ['./visa-news.component.scss']
})
export class VisaNewsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.router.navigate(['Join Now']);
}
iframe(){
  this.router.navigate(['Home']);
}

}
