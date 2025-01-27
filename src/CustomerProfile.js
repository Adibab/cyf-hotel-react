import React, { useState } from "react";
import RestaurantButton from "./Button";
export default function CustomerProfile({
  id,
  email,
  vip,
  phoneNumber,
  closeCustomerProfile
}) {
  return (
    <div className="customer-profile">
      {email && (
        <ul>
          <h5>Profile</h5>
          <li>Id: {id}</li>
          <li>Email: {email}</li>
          <li>Vip: {vip ? "Yes" : "No"}</li>
          <li>Phone no: {phoneNumber}</li>
          <button
            className="btn btn-primary"
            onClick={() => closeCustomerProfile(false)}
          >
            Close
          </button>

          {/* <li>
            <RestaurantButton
              close="close"
              onClick={() => closeCustomerProfile(false)}
            />
          </li> */}
        </ul>
      )}
    </div>
  );
}
