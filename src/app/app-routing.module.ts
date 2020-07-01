import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
