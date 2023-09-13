import React, { useContext, useState } from "react";
import { DataContext } from "../../../Context/Context";
import Notice from "../../Notice/View/Notice";
import task from "../../../Assets/Images/mytask.png";
import notice from "../../../Assets/Images/notice.png";
import datejournal from "../../../Assets/Images/datejournal.png";
import MyTask from "../../MyTask/View/MyTask";
import DateJournal from "../../DateJournal/View/DateJournal";
import resourcesimg from "../../../Assets/Images/resourcesimg.png";
import MyResouces from "../../MyResources/View/MyResources";
import Layout from "../../../Components/Layout/Layout";

const Home = () => {
  const {
    displayMyTask,
    displayNotice,
    displayDateJournal,
    displayMyResources,
    changeMyTask,
    changeDateJournal,
    changeNotice,
    changeMyResources,
  } = useContext(DataContext);
  const [counter, setCounter] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    // Increment the counter when the button is clicked
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <Layout>
      {displayMyTask ? (
        <MyTask />
      ) : displayNotice ? (
        <Notice />
      ) : displayDateJournal ? (
        <DateJournal />
      ) : displayMyResources ? (
        <MyResouces />
      ) : (
        <div className="container-home-render">
          <div className="first-home-cont-2">
            <div className="bg-home"></div>

            <div className="my-container">
              <button onClick={() => changeMyTask(true)}>
                <img src={task} alt="mytaskimage" />
                <h3>My Task</h3>
              </button>
            </div>
            <div className="my-container">
              <button onClick={() => changeDateJournal(true)}>
                <img src={datejournal} alt="datejournal" />

                <h3>Date Journal</h3>
              </button>
            </div>
            <div className="my-container">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  changeNotice(true);
                  handleButtonClick();
                }}
              >
                <img src={notice} alt="noticeimage" />
                <h3>Notice</h3>
              </button>
              {isHovered && <div className="counter">{counter}</div>}
            </div>

            <div className="my-container">
              <button onClick={() => changeMyResources(true)}>
                <img src={resourcesimg} alt="resourcesimage" />
                <h3>My Resources</h3>
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
