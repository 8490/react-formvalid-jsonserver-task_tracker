// import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ title, showAddTask, toggleShow, deleteAllTasks }) => {
  // const handleClick = () => {
  //   console.log("Click");
  // };

  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <Button
        color="purple"
        text="Show Add Task Bar"
        handleClick={handleClick}
      /> */}
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggle={toggleShow}
      />
      <Button
        color={"purple"}
        text={"Delete All Tasks"}
        toggle={deleteAllTasks}
      />
    </header>
  );
};

// Header.defaultProps = {
//   title: "Task Tracker",
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;
