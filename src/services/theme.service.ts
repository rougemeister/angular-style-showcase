import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('light');
  public theme$ = this.theme.asObservable();

  constructor() {
    // Initialize theme from local storage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(newTheme: string) {
    this.theme.next(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  }

  toggleTheme() {
    const newTheme = this.theme.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}