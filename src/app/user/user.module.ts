import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [UserComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
