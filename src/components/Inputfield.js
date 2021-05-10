

function Inputfield(props) {
  return (
    <div className="Inputfield">
      <textarea
        name="description"
        style={{ resize: "none" }}
        required
        onChange={(event) => props.transfer(event.target.value)}
        placeholder={props.holderText}
      >
        
      </textarea>
    </div>
  );
}

export default Inputfield;
