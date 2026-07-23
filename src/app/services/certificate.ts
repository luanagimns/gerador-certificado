import { Injectable, signal } from '@angular/core';
import { Certificate } from '../models/certificate.model';

@Injectable({ providedIn: 'root' })
export class CertificateService {
  certificates = signal<Certificate[]>([
    {
      id: '1',
      studentName: 'Ana Silva Lopes',
      generatedDate: new Date('2025-04-25'),
      activities: [
        'Introdução ao Angular',
        'Configuração com Angular CLI',
        'Criação de componentes reutilizáveis',
        'Manipulação de dados',
        'Implementação de data binding',
        'Criação de rotas com Angular Router',
        'Consumo de APIs REST'
      ]
    },
    {
      id: '2',
      studentName: 'Nome do aluno',
      generatedDate: new Date('2025-04-24'),
      activities: ['Atividade 1', 'Atividade 2']
    },
    {
      id: '3',
      studentName: 'Nome do aluno',
      generatedDate: new Date('2025-04-24'),
      activities: ['Atividade 1', 'Atividade 2']
    },
    {
      id: '4',
      studentName: 'Nome do aluno',
      generatedDate: new Date('2025-04-24'),
      activities: ['Atividade 1', 'Atividade 2']
    }
  ]);

  getById(id: string): Certificate | undefined {
    return this.certificates().find(cert => cert.id === id);
  }

  addCertificate(studentName: string, activities: string[]): Certificate {
    const certificate: Certificate = {
      id: crypto.randomUUID(),
      studentName,
      generatedDate: new Date(),
      activities
    };
    this.certificates.update(list => [certificate, ...list]);
    return certificate;
  }
}
