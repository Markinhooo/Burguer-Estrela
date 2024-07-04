  document.querySelector('.btn_comprar').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const lancheName = document.getElementById('lancheName').value;
    const endereco = document.getElementById('endereco').value;
    const payment = document.getElementById('payment').value;

	const mensagem = `Pedido de compra:%0A
      Nome do cliente: ${name}%0A
      Lanche escolhido: ${lancheName}%0A
      Endereço de entrega: ${endereco}%0A
      Forma de pagamento: ${payment}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=+5512997972700&text=${mensagem}`;
    window.open(whatsappLink, '_blank');
  });
