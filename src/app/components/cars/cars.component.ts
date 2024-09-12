import { Component, inject, Input } from '@angular/core';
import { Car } from '../../../model/model';
import { CarDataService } from '../../../services/data.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {
  @Input()
  cars!: Car;

  getBoxShadow(color: string): string {
    return `0 0 3px ${color}`;
  }

}
