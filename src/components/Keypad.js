// Code Keypad Component Here

function Keypad() {
  const handleChange = () => {
    console.log("Entering password...");
  };
  return (
    <div>
      <input type="Password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
