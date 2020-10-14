import { Component, OnInit, HostListener  } from '@angular/core';
import {NavbarService} from '../../navbar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;

  
    
   
     
      
  constructor(public navbarService:NavbarService) {
    this.navbarService.condicion=true;
   }
  

  ngOnInit(): void {
  }

}
