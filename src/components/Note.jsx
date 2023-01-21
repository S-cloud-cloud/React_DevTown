var React = require("react");

function Note() {
  return (
    <div className="note">
      {/* like class in html in react we use className because class already has a */}
      {/* different meaning in js */}
      <h1>DevTown</h1>
      <p>
        We at ShapeAI (A research and education-based startup ), are a team with
        an aim to provide students with a platform to research and make projects
        in the field of AI and ML
      </p>
    </div>
  );
}

export default Note;
