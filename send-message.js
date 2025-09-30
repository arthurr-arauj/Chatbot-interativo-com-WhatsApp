require('dotenv').config();
const twilio = require('twilio');

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendMessage() {
  try {
    const message = await client.messages.create({
      body: 'Olá do meu chatbot Node.js! Esta é uma mensagem de teste.',
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: 'whatsapp:+553492284560'
    });

    console.log(`✅ Mensagem enviada com sucesso! SID: ${message.sid}`);
  } catch (error) {
    console.error('❌ Erro ao enviar mensagem:', error);
  }
}

sendMessage();
