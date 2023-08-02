const Box = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};

const element = (
  <div className="bg_container">
    <div>
      <h1>Boxes</h1>
    </div>
    <div className="box_container">
      <div className="box1">
        <Box text="Small" />
      </div>
      <div className="box2">
        <Box text="Medium" />
      </div>
      <div className="box3">
        <Box text="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
