import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import {NavbarService} from '../../navbar.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit, OnInit {

  constructor(public navbarService:NavbarService) {
    this.navbarService.condicion=false;

   }

  ngOnInit(): void {
  
  }
  ngAfterViewInit() {
  }
}
