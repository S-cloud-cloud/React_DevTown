var React = require("react");

function Footer() {
  const curryear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {curryear}</p>
      {/* currly braces tells react it's a jsx & not html */}
      {/* <p>Copyright @ {curryear - 1}</p> */}
    </footer>
  );
}

export default Footer;
