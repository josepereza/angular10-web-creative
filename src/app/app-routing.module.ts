import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [
  {path:'about' ,component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'header' , component:HeaderComponent},
  {path:'', redirectTo: '/header', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
