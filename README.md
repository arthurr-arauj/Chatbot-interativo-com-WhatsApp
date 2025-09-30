# 🤖 Chatbot WhatsApp - Loja Nova Era

Este projeto é um *chatbot interativo para WhatsApp, desenvolvido com **Node.js, **Express* e a *API da Twilio*, que simula o atendimento automatizado de uma loja.

Ao enviar qualquer mensagem para o número da loja, o usuário recebe um *menu com opções numéricas* e pode obter informações como promoções, produtos e endereço.

---

## 📸 Demonstração

![Demonstração](Chatbot-interativo-com-WhatsApp/Gif chatbot.gif)  

---

## 💡 Funcionalidades

- Resposta automática com menu a qualquer mensagem recebida
- Opções numéricas interativas (1 a 5)
- Respostas personalizadas para cada item do menu
- Desenvolvido com boas práticas de segurança usando .env e gitignore

---

## 🛠 Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Twilio API for WhatsApp](https://www.twilio.com/whatsapp)
- [Ngrok](https://ngrok.com/)
- Dotenv
- Nodemon

---

## 🚀 Como rodar o projeto localmente

### 1. Pré-requisitos

- Node.js instalado
- Conta gratuita na [Twilio](https://www.twilio.com/try-twilio)
- Conta no [Ngrok](https://ngrok.com/)
- WhatsApp em um celular pessoal

---

### 2. Clonar o projeto

```bash
git clone https://github.com/arthurr-arauj/whatsapp-chatbot-node.git
cd whatsapp-chatbot-node
```



---

### 3. Instalar as dependências
```
npm install
```


---

### 4. Criar o arquivo .env

Crie um arquivo .env com as seguintes variáveis:


TWILIO_ACCOUNT_SID=SEU_SID_AQUI
TWILIO_AUTH_TOKEN=SEU_TOKEN_AQUI
TWILIO_WHATSAPP_NUMBER=whatsapp:‪+14155238886‬
PORT=3000



⚠ Esses dados estão disponíveis no painel da sua conta Twilio.

---

### 5. Rodar o servidor
```bash
npx nodemon index.js
```

---

### 6. Iniciar o ngrok

```bash
ngrok http 3000
```



Copie a URL gerada pelo ngrok (ex: https://xxxx.ngrok.io)
Vá até o Painel do Sandbox do WhatsApp Twilio
 e cole no campo:

https://xxxx.ngrok.io/whatsapp-webhook

---

### 7. Testar no WhatsApp

Envie a palavra de ativação para o número de teste do Sandbox:
‪+1 415 523 8886‬ → com a palavra join algo-aleatorio (exemplo)

Depois, envie qualquer mensagem e teste as opções do menu.

💬 Menu do Chatbot

Enviado automaticamente quando o usuário envia qualquer mensagem:

Olá! Bem-vindo à Loja Nova Era! Digite o número da opção desejada:

⿡ - Ver produtos  
⿢ - Ver promoções  
⿣ - Horário de atendimento  
⿤ - Endereço da loja  
⿥ - Comprar online

---

### 👤 Autor

Arthur Flávio Gonçalves Araújo
Estudante de Sistemas de Informação na Universidade Federal de Uberlândia

📍 Uberlândia - MG

✉ arthurflavio06@gmail.com

🔗 [LinkedIn](https://www.linkedin.com/in/arthur-fl%C3%A1vio/)
