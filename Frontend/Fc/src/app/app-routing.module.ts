
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';   
import { HomeComponent } from './home/home.component';
import { KolcsonzokComponent } from './kolcsonzok/kolcsonzok.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kolcsonzok', component: KolcsonzokComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

