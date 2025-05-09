function CreditCard(props) {
  function pickLogo(provider) {
    return provider === "Visa"
      ? "src/assets/images/visa.png"
      : "src/assets/images/master-card.svg";
  }
  function maskCardNumber(cardNumber) {
    const last4 = cardNumber.slice(-4);
    return last4.padStart(cardNumber.length, "*");
  }

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <img src={pickLogo(props.type)} />
      <div className="card-text">
        <p className="card-number">{maskCardNumber(props.number)}</p>
        <p>
          <span>
            Expires {props.expirationMonth} / {props.expirationYear}
          </span>
          <span>{props.bank}</span>
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}
export default CreditCard;
