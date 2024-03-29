import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleApproved } from "../../redux/actions/userAction";

const UserCard = ({
  user: { name, email, gender, phone, imageUrl, age, isApproved, id },
  toggleApproved
}) => (
  <div className="card hoverable">
    <div className="card-image">
      <img src={imageUrl} alt={name} />

      <span
        className={`btn-floating halfway-fab waves-effect waves-light ${
          isApproved ? "red" : "teal"
        } darken-2 tooltipped`}
        data-position="top"
        data-tooltip={`${
          isApproved ? "Click here to remove" : "Click Here to Approve"
        }`}
        onClick={() => toggleApproved(id)}
      >
        <i className="material-icons">{isApproved ? "clear" : "check"}</i>
      </span>
    </div>
    <div className="card-content">
      <div className="card-title d-flex-between" style={{ display: "flex" }}>
        <span className="name">{name}</span>
        <span
          className={`new badge ${isApproved ? "teal" : "red"} lighten-1`}
          data-badge-caption={`${isApproved ? "Approved" : "Not Approved"}`}
        ></span>
      </div>

      <ul className="collection">
        <li className="collection-item">
          <span className="strong"> Email </span> &#8658; {email}
        </li>
        <li className="collection-item">
          <span className="strong"> Gender </span> &#8658;{" "}
          {gender[0].toUpperCase() + gender.slice(1)}
        </li>
        <li className="collection-item">
          <span className="strong"> Phone </span> &#8658; {phone}
        </li>
        <li className="collection-item">
          <span className="strong"> Age </span> &#8658; {age}
        </li>
      </ul>
    </div>
  </div>
);

UserCard.propTypes = {
  toggleApproved: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default connect(null, { toggleApproved })(UserCard);
