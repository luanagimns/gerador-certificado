import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CertificatesListComponent } from './pages/certificates-list/certificates-list';
import { GenerateCertificateComponent } from './pages/generate-certificate/generate-certificate';
import { CertificateDetailComponent } from './pages/certificate-detail/certificate-detail';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lista',
    component: CertificatesListComponent
  },
  {
    path: 'gerar',
    component: GenerateCertificateComponent
  },
  {
    path: 'certificado/:id',
    component: CertificateDetailComponent
  }
];
