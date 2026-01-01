const form = document.getElementById('form-inscricao');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const celula = document.getElementById('celula').value;
  const lider = document.getElementById('lider').value;

  const turmaSelecionada = document.querySelector('input[name="turma"]:checked');
  const turma = turmaSelecionada ? turmaSelecionada.value : 'Não informado';

  const numeroIgreja = '5585994215508';

  const mensagem =
    `Olá! Gostaria de me inscrever na *EBR – Escola Bíblica Restaurar*.%0A%0A` +
        `🕘 Turma: ${turma}%0A` +
        `👤 Nome: ${nome}%0A` +
        `📱 WhatsApp: ${telefone}%0A` +
        `📧 Email: ${email}%0A` +
        `🏠 Célula: ${celula}%0A` +
        `👥 Líder: ${lider}%0A`;

  const url = `https://wa.me/${numeroIgreja}?text=${mensagem}`;

  window.open(url, '_blank');
});

