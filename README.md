# Boilerplate de Micro SaaS com Next.js 14

Bem-vindo ao **Boilerplate de Micro SaaS**! Este é um template completo para construir um Software as a Service (SaaS) moderno usando Next.js 14 (App Router), TypeScript, Prisma, Stripe, NextAuth e Tailwind CSS. Ele foi projetado para ser escalável, seguro e pronto para produção.

## Recursos

- **Landing Page**: Página inicial atraente com seções de recursos, planos e CTA para conversão.
- **Autenticação Completa**: Suporte a login com email/senha e OAuth (Google) via NextAuth.
- **Registro de Usuários**: Página de signup para criar novos usuários com email, nome e senha.
- **Área de Administração**: Dashboard protegido para gerenciar usuários e assinaturas (apenas para admins).
- **Dashboard do Usuário**: Área para visualizar informações do usuário e status de assinatura.
- **Gerenciamento de Assinaturas**:
  - Integração com Stripe para criar e gerenciar assinaturas.
  - Página `/subscribe` para escolher planos e iniciar checkout.
  - Webhook para atualizar assinaturas no banco.
- **Banco de Dados**: Integração com PostgreSQL via Prisma ORM.
- **Tailwind CSS**: Estilização moderna, responsiva e personalizável.
- **Proteção de Rotas**: Middleware para restringir acesso a `/dashboard` e `/admin` e componente `ProtectedRoute` para proteção adicional.
- **API Segura**: Rotas de API para autenticação e integração com Stripe.
- **Páginas Estáticas**: Termos de Uso, Política de Privacidade e Contato.

## Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Prisma** (com PostgreSQL)
- **NextAuth** (autenticação)
- **Stripe** (pagamentos)
- **Tailwind CSS** (estilização)
- **bcrypt** (hash de senhas)

## Estrutura do Projeto

```
src/
├── app/                    # Rotas do App Router
│   ├── api/               # Rotas de API
│   │   ├── auth/[...nextauth]/
│   │   │   └── route.ts  # Configuração do NextAuth
│   │   └── stripe/
│   │       └── webhook/
│   │           └── route.ts # Webhook do Stripe
│   ├── admin/            # Área de administração
│   ├── auth/            # Páginas de autenticação
│   ├── dashboard/       # Área do usuário logado
│   ├── subscribe/       # Página para escolher planos
│   ├── terms/          # Termos de Uso
│   ├── privacy/        # Política de Privacidade
│   ├── contact/        # Página de Contato
│   ├── layout.tsx      # Layout global
│   └── page.tsx        # Landing Page
├── components/         # Componentes reutilizáveis
├── lib/               # Utilitários e configurações
├── middleware.ts     # Proteção de rotas
├── prisma/          # Schema do banco de dados
└── styles/         # Estilos globais
```

## Pré-requisitos

- Node.js 18 ou superior
- PostgreSQL instalado e rodando
- Conta no [Stripe](https://stripe.com) para pagamentos
- Conta no [Google Cloud](https://console.cloud.google.com) para OAuth

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/micro-saas-boilerplate.git
   cd micro-saas-boilerplate
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/saas_db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="sua-chave-secreta-aqui"
   GOOGLE_CLIENT_ID="seu-google-client-id"
   GOOGLE_CLIENT_SECRET="seu-google-client-secret"
   STRIPE_SECRET_KEY="sk_test_xxx"
   STRIPE_WEBHOOK_SECRET="whsec_xxx"
   NEXT_PUBLIC_URL="http://localhost:3000"
   ```
   Substitua `USER`, `PASSWORD` e `saas_db` pelas credenciais do seu PostgreSQL.
4. **Configure o banco de dados**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```
5. **Inicie o projeto**:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000` no navegador.

## Configuração do Stripe

1. **Crie preços no Stripe**:
   - No Dashboard do Stripe, crie produtos para os planos "Básico", "Pro" e "Enterprise" com preços mensais.
   - Copie os `Price IDs` e atualize o array `plans` em `src/app/subscribe/page.tsx`.

2. **Teste webhooks localmente**:
   ```bash
   stripe listen --forward-to http://localhost:3000/api/stripe/webhook
   ```
   Copie o `Webhook Signing Secret` gerado e adicione ao `.env` como `STRIPE_WEBHOOK_SECRET`.

3. **Teste eventos**:
   ```bash
   stripe trigger customer.subscription.created
   ```

## Uso

- **Landing Page**: `/`
- **Login**: `/auth/signin`
- **Registro**: `/auth/signup`
- **Dashboard do Usuário**: `/dashboard`
- **Assinatura**: `/subscribe`
- **Admin**: `/admin/dashboard`
- **Logout**: `/auth/signout`
- **Páginas Estáticas**:
  - Termos de Uso: `/terms`
  - Política de Privacidade: `/privacy`
  - Contato: `/contact`

## Scripts Disponíveis

```bash
npm run dev        # Inicia o servidor de desenvolvimento
npm run build      # Gera a build de produção
npm run start      # Inicia o servidor de produção
npm run prisma:generate # Gera o cliente Prisma
npm run prisma:migrate  # Aplica migrações ao banco
```

## Personalização

- **Estilização**: Edite `src/app/globals.css` ou adicione classes Tailwind.
- **Planos**: Ajuste os preços e `priceId` em `src/app/subscribe/page.tsx`.
- **Funcionalidades**: Adicione mais rotas ou componentes.
- **Stripe**: Configure webhooks com sua URL de produção.
- **Páginas Estáticas**: Atualize `terms`, `privacy` e `contact` com seu conteúdo real.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests com melhorias! Este boilerplate é um ponto de partida e pode ser expandido conforme suas necessidades.

## Licença

MIT License - sinta-se livre para usar, modificar e distribuir este código.

---


