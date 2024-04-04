import Button from "../components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Fantasy" title="Fantasy" />
          <Button onClickHandler={handleClick} value="Biography" title="Biography" />
          <Button onClickHandler={handleClick} value="Narrative" title="Narrative" />
          <Button onClickHandler={handleClick} value="Action" title="Action" />
        </div>
      </div>
    </>
  );
};

export default Recommended;