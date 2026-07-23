import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Certificate } from '../../models/certificate.model';
import { CertificateService } from '../../services/certificate';
import { BackButtonComponent } from '../../_components/back-button/back-button';

@Component({
  selector: 'app-certificate-detail',
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './certificate-detail.html',
  styleUrl: './certificate-detail.css'
})
export class CertificateDetailComponent implements OnInit {
  certificate = signal<Certificate | null>(null);

  constructor(
    private route: ActivatedRoute,
    private certificateService: CertificateService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadCertificate(id);
      }
    });
  }

  loadCertificate(id: string): void {
    const cert = this.certificateService.getById(id);
    this.certificate.set(cert ?? null);
  }

  downloadCertificate(): void {
    // TODO: Implementar lógica de download
    console.log('Downloading certificate:', this.certificate()?.studentName);
  }

  getFormattedDate(date: Date | undefined): string {
    if (!date) {
      const today = new Date();
      today.setTime(today.getTime() + today.getTimezoneOffset() * 60 * 1000);
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      return `${day}/${month}/${year}`;
    }
    
    const d = new Date(date);
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  getActivitiesText(activities: string[]): string {
    return activities.join(', ');
  }
}
