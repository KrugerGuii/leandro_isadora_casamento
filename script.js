// ===================================
// CONVITE DE CASAMENTO INTERATIVO
// Script de Interatividade - JavaScript Puro
// ===================================

// Elementos do DOM
const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const invitationScreen = document.getElementById('invitation-screen');
const backButton = document.getElementById('back-button');

// ===== FUNÇÃO: Abrir Envelope =====
function openEnvelope() {
    envelopeScreen.classList.remove('active');
    invitationScreen.classList.add('active');
}

// ===== FUNÇÃO: Voltar ao Envelope =====
function backToEnvelope() {
    invitationScreen.classList.remove('active');
    envelopeScreen.classList.add('active');
}

// ===== EVENT LISTENERS =====

// Clique no envelope para abrir
envelope.addEventListener('click', openEnvelope);

// Clique no botão voltar
backButton.addEventListener('click', backToEnvelope);

// Tecla ESC para voltar
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && invitationScreen.classList.contains('active')) {
        backToEnvelope();
    }
});

console.log('✨ Convite de Casamento Interativo carregado!');
console.log('💡 Dica: Pressione ESC para voltar ao envelope');
