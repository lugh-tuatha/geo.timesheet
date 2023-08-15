import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from '../timesheet/components/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent,
    TrainingsComponent,
    ModalComponent
  ],
  exports: [
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class TrainingsModule { }
