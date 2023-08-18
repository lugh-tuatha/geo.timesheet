import { Component, Input } from '@angular/core';
import { Training } from '../../models/training' 
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  readonly trainingUrl = 'http://localhost:9000/geo/api/v1/trainings'

  constructor(private http:HttpClient){}

  trainings: Training[] = [];
  ngOnInit(){
    this.http.get<any>(this.trainingUrl).subscribe((response: any) => {
      this.trainings = response.data.findTrainings;
    });
  }

  faEllipsisVertical = faEllipsisVertical;
  faPlus = faPlus;

  isMenuOpened: boolean[] = [];

  // Initialize the menu states for each card
  initializeMenuStates(): void {
    this.isMenuOpened = this.trainings.map(() => false);
  }

  // Toggle the menu for the card at the given index
  toggleMenu(index: number): void {
    this.isMenuOpened[index] = !this.isMenuOpened[index];
    
    // Close menus for other cards
    for (let i = 0; i < this.isMenuOpened.length; i++) {
      if (i !== index) {
        this.isMenuOpened[i] = false;
      }
    }
  }

  closeMenu(): void {
    this.isMenuOpened = this.isMenuOpened.map(() => false);
  }
}