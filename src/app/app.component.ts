import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeTogglerComponent } from "./components/theme-toggler/theme-toggler.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from './components/hero/hero.component';
import { CarsComponent } from "./components/cars/cars.component";
import { CarDataService } from '../services/data.service';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeTogglerComponent, HeaderComponent, HeroComponent, CarsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-style-showcase';

  cars: any[] = [];

  constructor(private carDataService: CarDataService) {}

  ngOnInit(): void {
    this.carDataService.fetchCars().subscribe(data => {
      this.cars = data;
      console.log(this.cars);
    });
  }


  
}
