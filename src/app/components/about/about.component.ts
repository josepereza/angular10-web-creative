import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../navbar.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public navbarService:NavbarService) {
    this.navbarService.condicion=false;
   }

  ngOnInit(): void {
  }

}
