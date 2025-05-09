function Greetings(props) {
  function getLanguageGreeting(lang) {
    if (lang === "de") return "Hallo";
    else if (lang === "es") return "Hola";
    else if (lang === "fr") return "Bonjour";
    else return "Hello";
  }
  return (
    <div className="greetings">
      <p>
        {getLanguageGreeting(props.lang)} {props.children}
      </p>
    </div>
  );
}
export default Greetings;
