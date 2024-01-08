const openMail = () => {
  const subject = 'Consultoria Agência Devity';
  const msg = 'Olá, estou entrando em contato a partir do site Devity.';

  const target = `mailto:devitysoftware@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(msg)}`;

  window.open(target, '_blank');
};

export default openMail;
