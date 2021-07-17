import React from "react";
import Modal from "react-bootstrap/Modal";

function BoardItemForm({ item, isShow, handleClose, handelInput, handleSubmit }) {
  return (
    <Modal show={isShow} onHide={handleClose} animation={false}>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Item </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="dishName">Dish Name</label>
            <input
              type="text"
              class="form-control"
              onChange={handelInput}
              value={item.dishName}
              id="dishName"
              required
              name="dishName"
              placeholder="Enter Dish Name"
            />
          </div>
          <div class="form-group">
            <label for="chefName">Chef Name</label>
            <input
              type="text"
              class="form-control"
              onChange={handelInput}
              id="chefName"
              value={item.chefName}
              required
              name="chefName"
              placeholder="Enter Chef Name"
            />
          </div>
          <div class="form-group">
            <label for="dueTime">Due Time</label>
            <input
              type="datetime-local"
              class="form-control"
              onChange={handelInput}
              id="dueTime"
              value={item.dueTime}
              required
              name="dueTime"
              placeholder="Enter Due Time"
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              onChange={handelInput}
              value={item.description}
              required
              name="description"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="isCompleted"
              name="isCompleted"
              onChange={handelInput}
              checked={item.isCompleted}
            />
            <label class="custom-control-label" for="isCompleted">
              Is Completed
            </label>
          </div>
          {/* <input
            type="text"
            name="dishName"
            placeholder="Dish Name"
            onChange={handelInput}
            value={item.dishName}
            required
          />
          <input
            type="text"
            name="chefName"
            placeholder="Chef Name"
            onChange={handelInput}
            value={item.chefName}
            required
          />
          <input
            type="datetime-local"
            name="dueTime"
            placeholder="Due time"
            onChange={handelInput}
            value={item.dueTime}
            required  />*/}
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
          <button onClick={handleClose} className="btn btn-info">
            Cancel
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default BoardItemForm;
