import React, { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import estimateModalImg from "../../../Assets/Images/timeEstimateModalImg.png";
import { IoIosHelpCircle } from "react-icons/io";

const TimeEstimationModalSubtask = () => {
  const {
    setModalValueSubtask,
    closeModalSubSubtask,
    modalValueSubtask,
    selectedItemSubtaskTimeEstimation,
    closeModalSubtask,
    setSelectedItemSubtaskTimeEstimation,
  } = useContext(DataContext);

  const handleInputChangeSubtask = (e) => {
    setModalValueSubtask(e.target.value);
  };

  const handleKeyPressSubtask = (e) => {
    if (e.key === "Enter") {
      saveModalValueSubtask();
    } else if (e.key === "Escape") {
      closeModalSubSubtask();
    }
  };

  const saveModalValueSubtask = () => {
    // Handle saving the modal value and updating the main task state
    const newValueSubtask = modalValueSubtask; // The value entered by the user
    selectedItemSubtaskTimeEstimation.timeestimated = newValueSubtask;
    closeModalSubtask();
    setSelectedItemSubtaskTimeEstimation("");
  };

  return (
    <div className="modal-estimate-time">
      <div className="modal-content">
        <div className="left-part-modal">
          <h2>
            <span>Time Estimation</span>
            <span>
              <IoIosHelpCircle />
            </span>
          </h2>
          <img src={estimateModalImg} alt="timeestimationmodalimg" />
        </div>
        <div className="right-part-modal">
          <input
            type="text"
            value={modalValueSubtask}
            onChange={handleInputChangeSubtask}
            onKeyDown={handleKeyPressSubtask}
            placeholder="Type in time"
          />
          <h5>changes are automatically saved</h5>
          <div className="btns-modal-estimate">
            <button onClick={saveModalValueSubtask}>Save</button>
            <button onClick={closeModalSubtask}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeEstimationModalSubtask;
