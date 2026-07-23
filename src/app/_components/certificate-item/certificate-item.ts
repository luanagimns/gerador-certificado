import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-certificate-item',
  imports: [CommonModule],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.css'
})
export class CertificateItemComponent {
  @Input() certificate!: Certificate;

  constructor(private router: Router) {}

  getFormattedDate(): string {
    if (!this.certificate?.generatedDate) return '';
    const date = new Date(this.certificate.generatedDate);
    // Ajusta para evitar problemas de timezone
    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  onViewClick(): void {
    this.router.navigate(['/certificado', this.certificate.id]);
  }
}

