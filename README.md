# PMI Montagens Industriais

Este é o repositório do website institucional da **PMI Montagens Industriais**, uma empresa especializada em montagens eletromecânicas, manutenção industrial e grandes paradas de fábrica, com forte atuação no setor de cimento e mineração.

## 🚀 Funcionalidades

- **Apresentação de Projetos:** Listagem dinâmica de obras realizadas, incluindo detalhes como cliente, localização e período.
- **Equipe Técnica:** Exibição do corpo técnico qualificado, destacando experiências em grandes grupos industriais (Votorantim, Brennand, InterCement, etc.).
- **Formulário de Contato:** Canal direto para clientes interessados em orçamentos e informações comerciais.
- **Trabalhe Conosco:** Formulário estruturado para captação de currículos com suporte a validação de campos e indicação de anexos.
- **Integração com EmailJS:** Envio de e-mails diretamente pelo frontend, eliminando a necessidade de um backend complexo para notificações.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+):** Lógica modular e manipulação dinâmica do DOM.
- **EmailJS:** Serviço para envio de e-mails via API.
- **CSS3:** Estilização moderna com layouts em Grid e Flexbox.
- **HTML5:** Estrutura semântica para melhor SEO e acessibilidade.

## 📁 Estrutura do Projeto

```text
pmi-montagens/
├── src/
│   ├── components/       # Componentes reutilizáveis (Formulários, etc)
│   │   ├── CareerForm.js   # Lógica e template do formulário de RH
│   │   └── ContactForm.js  # Lógica e template do formulário de contato
│   ├── config/           # Configurações globais
│   │   └── email.js        # Chaves e destinos do EmailJS
│   ├── data/             # Dados estáticos da aplicação
│   │   ├── projects.js     # Catálogo de projetos realizados
│   │   └── team.js         # Dados dos membros da equipe
│   └── assets/           # Imagens e ícones (referenciados no data)
└── index.html            # Ponto de entrada principal
```

## ⚙️ Configuração do E-mail

O projeto utiliza o **EmailJS**. Para que os formulários funcionem corretamente, as credenciais devem ser configuradas no arquivo `src/config/email.js`.

### Passo a Passo:
1. Crie uma conta em emailjs.com.
2. Adicione um novo serviço de e-mail (ex: Gmail).
3. Crie dois templates:
   - Um para **Contato** (ID configurado em `contactTemplateId`).
   - Um para **RH/Carreiras** (ID configurado em `careerTemplateId`).
4. Atualize o arquivo `src/config/email.js` com sua `publicKey`, `serviceId` e os IDs dos templates.

```javascript
export const EMAILJS_CONFIG = {
  publicKey: "SUA_CHAVE_PUBLICA",
  serviceId: "SEU_SERVICE_ID",
  contactTemplateId: "SEU_TEMPLATE_CONTATO",
  careerTemplateId: "SEU_TEMPLATE_RH",
};
```

## 📝 Detalhes de Implementação

### Validação de Formulários
Ambos os formulários (`CareerForm` e `ContactForm`) possuem validação nativa:
- Verificação de campos obrigatórios.
- Validação de formato de e-mail via Regex.
- Máscara de CPF em tempo real no formulário de carreira.
- Feedback visual de erro e estados de "Enviando..." no botão de submit.

### Gestão de Dados
Os projetos e membros da equipe são geridos através de objetos literais em `src/data/`. Para adicionar um novo projeto, basta inserir um novo objeto no array em `projects.js`:

```javascript
{
  id: "10",
  title: "Nome do Novo Projeto",
  client: "Cliente X",
  location: "Cidade - UF",
  startDate: "MM-AAAA",
  endDate: "MM-AAAA",
  description: "Descrição detalhada...",
  thumbnail: "/images/projetos/thumb.jpg"
}
```

## 🔧 Como Executar

Como o projeto utiliza módulos ES6 (`import`/`export`), ele deve ser servido através de um servidor local para evitar erros de CORS.

1. Clone o repositório.
2. Utilize a extensão **Live Server** do VS Code ou execute:
   ```bash
   # Se tiver Python instalado
   python -m http.server 8000
   ```
3. Acesse `http://localhost:8000`.

---

*Desenvolvido para PMI Montagens Industriais.*
