import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateItemComponent } from '../../_components/certificate-item/certificate-item';
import { BackButtonComponent } from '../../_components/back-button/back-button';
import { CertificateService } from '../../services/certificate';

@Component({
  selector: 'app-certificates-list',
  imports: [CommonModule, CertificateItemComponent, BackButtonComponent],
  templateUrl: './certificates-list.html',
  styleUrl: './certificates-list.css'
})
export class CertificatesListComponent {
  certificates;

  constructor(private certificateService: CertificateService) {
    this.certificates = this.certificateService.certificates;
  }

  get hasCertificates(): boolean {
    return this.certificates().length > 0;
  }
}



