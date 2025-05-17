# ExpanseApp - Aplicativo de Controle de Gastos

Um aplicativo móvel desenvolvido em React Native para controle e gerenciamento de gastos pessoais.

## 🚀 Funcionalidades

- **Autenticação de Usuários**
  - Login com email e senha
  - Registro de novos usuários
  - Recuperação de senha
  - Perfil do usuário

- **Gerenciamento de Gastos**
  - Adicionar novos gastos
  - Editar gastos existentes
  - Excluir gastos
  - Visualizar histórico de gastos
  - Cálculo automático do total de gastos

- **Interface Intuitiva**
  - Design moderno e responsivo
  - Navegação fácil entre telas
  - Rolagem suave da lista de gastos
  - Feedback visual para ações do usuário

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI
- Conta no Firebase
- Dispositivo móvel com Expo Go instalado ou emulador

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
cd expanseApp
npm install
# ou
yarn install
```

3. Configure o Firebase:
   - Crie um projeto no Firebase Console
   - Ative a autenticação por email/senha
   - Configure o Firestore Database
   - Copie as credenciais do Firebase para o arquivo `firebase.js`

4. Inicie o aplicativo:
```bash
npm start
# ou
yarn start
```

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- Firebase (Authentication e Firestore)
- React Navigation
- React Native Paper (UI Components)

## 📱 Estrutura do Projeto

```
expanseApp/
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes reutilizáveis
│   ├── Buttons.js      # Componentes de botões
│   └── CustomInputs.js # Componentes de input
├── navigation/          # Configuração de navegação
│   ├── AppNavigator.js # Navegação autenticada
│   └── AuthNavigator.js# Navegação não autenticada
├── screens/            # Telas do aplicativo
│   ├── HomeScreen.js   # Tela principal de gastos
│   ├── LoginScreen.js  # Tela de login
│   ├── ProfileScreen.js# Tela de perfil
│   └── RegisterScreen.js# Tela de registro
├── firebase.js         # Configuração do Firebase
├── App.js             # Componente principal
└── package.json       # Dependências do projeto
```

## 🔐 Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com)
2. Ative a autenticação por email/senha
3. Configure o Firestore Database
4. Copie as credenciais do projeto para o arquivo `firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-auth-domain",
  projectId: "seu-project-id",
  storageBucket: "seu-storage-bucket",
  messagingSenderId: "seu-messaging-sender-id",
  appId: "seu-app-id"
};
```

## 📱 Uso do Aplicativo

1. **Login/Registro**
   - Faça login com email e senha
   - Ou crie uma nova conta
   - Use a opção "Esqueci a senha" se necessário

2. **Gerenciamento de Gastos**
   - Na tela principal, adicione novos gastos
   - Preencha descrição e valor
   - Visualize o total de gastos no topo
   - Edite ou exclua gastos existentes

3. **Perfil do Usuário**
   - Acesse suas informações
   - Visualize dados da conta
   - Faça logout quando necessário


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
