# Gerador de Certificado

Aplicação Angular para gerar, listar e visualizar certificados de conclusão de curso.

## Funcionalidades

- **Home** — página inicial de apresentação
- **Lista de certificados** — visualização de todos os certificados já gerados
- **Gerar certificado** — formulário para criar um novo certificado informando nome do aluno e atividades concluídas
- **Detalhe do certificado** — visualização do certificado individual, com opção de download

## Tecnologias

- [Angular 22](https://angular.dev/)
- TypeScript
- Vitest (testes unitários)

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Acesse `http://localhost:4200/` no navegador. A aplicação recarrega automaticamente a cada alteração nos arquivos.

## Build

Para gerar o build de produção:

```bash
npm run build
```

Os artefatos ficam disponíveis na pasta `dist/`.

## Testes

Para rodar os testes unitários:

```bash
npm test
```
