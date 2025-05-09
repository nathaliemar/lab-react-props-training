function BoxColor(props) {
  function generateRGB(props) {
    return `rgb(${props.r},${props.g},${props.b})`;
  }
  function rgbToHex(r, g, b) {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  }
  return (
    <div className="box-color" style={{ backgroundColor: generateRGB(props) }}>
      <p>{generateRGB(props)}</p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  );
}
export default BoxColor;
