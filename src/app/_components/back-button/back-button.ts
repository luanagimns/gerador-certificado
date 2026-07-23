import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.html',
  styleUrl: './back-button.css'
})
export class BackButtonComponent {
  @Input() to = '/';

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate([this.to]);
  }
}
