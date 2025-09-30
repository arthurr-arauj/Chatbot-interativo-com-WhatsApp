const express = require('express');
const { MessagingResponse } = require('twilio').twiml;
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: false }));

// Rota que será chamada pela Twilio
app.post('/whatsapp-webhook', (req, res) => {
    const msg = req.body.Body.toLowerCase().trim();
    const twiml = new MessagingResponse();

    console.log(`📩 Mensagem recebida: "${msg}"`);

    // Verifica se o usuário digitou uma das opções
    if (msg === '1') {
        twiml.message('📱 Produtos: celulares, fones Bluetooth, carregadores e caixas de som.');
    } else if (msg === '2') {
        twiml.message('🔥 Promoção do dia: fones Bluetooth com 15% de desconto!');
    } else if (msg === '3') {
        twiml.message('🕐 Atendemos de segunda a sábado, das 9h às 18h.');
    } else if (msg === '4') {
        twiml.message('📍 Estamos na Av. João Naves, 456 - Uberlândia/MG.');
    } else if (msg === '5') {
        twiml.message('🛒 Acesse: https://loja-novaera.com.br');
    } else {
        // Qualquer outra mensagem exibe o menu
        twiml.message(
            `👋 Olá! Bem-vindo à Loja Nova Era! Digite o número da opção desejada:\n\n` +
            `1️⃣ - Ver produtos\n` +
            `2️⃣ - Ver promoções\n` +
            `3️⃣ - Horário de atendimento\n` +
            `4️⃣ - Endereço da loja\n` +
            `5️⃣ - Comprar online`
        );
    }

    res.type('text/xml');
    res.send(twiml.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
