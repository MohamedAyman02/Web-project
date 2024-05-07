import "./Publisher.css";
import Input from "../../components/Input";

function Publisher({ handleChange }) {
  return (
    <div className="xl">
      <h2 className="sidebar-title">Publisher</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Nahdet Misr"
          title="Nahdet Misr"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Dar Al-Masriya"
          title="Dar Al-Masriya"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Al-Shrouk"
          title="Al-Shrouk"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Al-Diwan"
          title="Al-Diwan"
          name="test"
        />
      </div>
    </div>
  );
}

export default Publisher;