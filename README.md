# Boilerplate de Micro SaaS com Next.js 14

Bem-vindo ao **Boilerplate de Micro SaaS**! Este é um template completo para construir um Software as a Service (SaaS) moderno usando Next.js 14 (App Router), TypeScript, Prisma, Stripe, NextAuth e Tailwind CSS. Ele foi projetado para ser escalável, seguro e pronto para produção.

## Recursos

- **Landing Page**: Uma página inicial atraente com CTA (Call to Action) para conversão.
- **Autenticação Completa**: Suporte a login com email/senha e OAuth (Google) via NextAuth.
- **Área de Administração**: Dashboard protegido para gerenciar usuários e assinaturas (apenas para admins).
- **Banco de Dados**: Integração com PostgreSQL via Prisma ORM.
- **Gerenciamento de Pagamentos**: Integração com Stripe para assinaturas e webhooks.
- **Tailwind CSS**: Estilização moderna, responsiva e personalizável.
- **Proteção de Rotas**: Middleware e componente `ProtectedRoute` para restringir acesso.
- **API Segura**: Rotas de API para autenticação e integração com Stripe.

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
│   ├── admin/            # Área de administração
│   ├── auth/            # Páginas de autenticação
│   ├── dashboard/       # Dashboard do usuário
│   └── page.tsx        # Landing page
├── components/         # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AdminSidebar.tsx
│   └── ProtectedRoute.tsx
├── lib/               # Utilitários e configurações
│   ├── auth.ts       # Configuração do NextAuth
│   ├── prisma.ts    # Cliente Prisma
│   └── stripe.ts   # Configuração do Stripe
├── middleware.ts     # Proteção de rotas
├── prisma/          # Schema do banco de dados
│   └── schema.prisma
└── styles/         # Estilos globais
    └── globals.css
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

3. **Configure as variáveis de ambiente**: Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
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
   Gere uma chave secreta para `NEXTAUTH_SECRET` (ex.: `openssl rand -base64 32`).
   Obtenha as chaves do Google e Stripe nas respectivas plataformas.

4. **Configure o banco de dados**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Inicie o projeto**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Uso

- **Landing Page**: Acesse `/` para ver a página inicial com CTA.
- **Login**: Vá para `/auth/signin` para fazer login com email/senha ou Google.
- **Registro**: Acesse `/auth/signup` para criar uma nova conta.
- **Dashboard**: Após login, veja `/dashboard` para informações do usuário e assinatura.
- **Admin**: Acesse `/admin/dashboard` (apenas para usuários com role "ADMIN").
- **Logout**: Use `/auth/signout` para sair.

## Scripts Disponíveis

```bash
npm run dev              # Inicia o servidor de desenvolvimento
npm run build            # Gera a build de produção
npm run start            # Inicia o servidor de produção
npm run prisma:generate  # Gera o cliente Prisma
npm run prisma:migrate   # Aplica migrações ao banco
```

## Personalização

- **Estilização**: Edite `src/styles/globals.css` ou adicione classes Tailwind.
- **Planos**: Ajuste os preços e planos em `src/app/page.tsx`.
- **Funcionalidades**: Adicione mais rotas ou componentes em `src/app/` e `src/components/`.
- **Stripe**: Configure webhooks em `src/app/api/stripe/webhook/route.ts` com sua URL de produção.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests com melhorias! Este boilerplate é um ponto de partida e pode ser expandido conforme suas necessidades.

## Licença

MIT License - sinta-se livre para usar, modificar e distribuir este código.

Feito com ❤️ por @oadcavalcante
