import React from 'react';
const EditButtons = props => {
  return (
    <div className="row">
      <div className="col s12 right-align">
        <div className="col l1 s3 right">
          <button
            className="waves-effect indigo btn-small"
            type="submit"
            disabled={props.isLoading}
          >
            Save
          </button>
        </div>
        <div className="col s6 right">
          <button
            className="waves-effect black btn-small"
            type="button"
            onClick={() => props.setOpen(false)}
            disabled={props.isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditButtons;
