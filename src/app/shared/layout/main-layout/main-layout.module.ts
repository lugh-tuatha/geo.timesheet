import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
  ]
})
export class MainLayoutModule { }
