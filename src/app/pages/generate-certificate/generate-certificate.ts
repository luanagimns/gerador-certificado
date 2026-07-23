import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CertificateService } from '../../services/certificate';

@Component({
  selector: 'app-generate-certificate',
  imports: [CommonModule, FormsModule],
  templateUrl: './generate-certificate.html',
  styleUrl: './generate-certificate.css'
})
export class GenerateCertificateComponent {
  fullName = signal('');
  activityTitle = signal('');
  activities = signal<string[]>([]);

  constructor(private router: Router, private certificateService: CertificateService) {}

  addActivity(): void {
    if (this.activityTitle().trim()) {
      this.activities.update(list => [...list, this.activityTitle()]);
      this.activityTitle.set('');
    }
  }

  removeActivity(index: number): void {
    this.activities.update(list => list.filter((_, i) => i !== index));
  }

  generateCertificate(): void {
    if (this.fullName().trim() && this.activities().length > 0) {
      this.certificateService.addCertificate(this.fullName().trim(), this.activities());
      this.router.navigate(['/lista']);
    }
  }

  navigateToCertificateList(): void {
    this.router.navigate(['/lista']);
  }
}
