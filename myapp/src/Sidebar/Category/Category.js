import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="zl">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Fiction"
          title="Fiction"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Horror"
          title="Horror"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Adventure"
          title="Adventure"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Fantasy"
          title="Fantasy"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;