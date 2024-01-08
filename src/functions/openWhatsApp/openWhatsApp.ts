const openWhatsApp = () => {
  const number = '5511941417750';
  const msg = 'Olá, estou entrando em contato a partir do site Devity.';

  const target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    number
  )}&text=${encodeURIComponent(msg)}`;

  window.open(target, '_blank');
};

export default openWhatsApp;
