import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeTogglerComponent } from "./components/theme-toggler/theme-toggler.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeTogglerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-style-showcase';
}
