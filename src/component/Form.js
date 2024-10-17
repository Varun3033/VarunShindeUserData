import React, { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import { useDispatch, useSelector } from "react-redux";
import { onChangeHandel, saveEditUserDetails } from "../redux/user.slice";

const EditUser = () => {
  const dispatch = useDispatch();
  let { editUserDetails, editIndex } = useSelector((state) => state.users);

  return (
    <>
      <div className={editIndex === -1 ? "d-none" : "position-fixed pop-up"}>
        <section className="row">
          <section className="col-10 m-auto">
            <h4>Basic Modal</h4>
            <
              div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="name"
                value={editUserDetails.name}
                required
                name="name"
                onChange={(event) =>
                  dispatch(
                    onChangeHandel({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email :
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                value={editUserDetails.email}
                required
                name="email"
                onChange={(event) =>
                  dispatch(
                    onChangeHandel({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone :
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Phone"
                id="phone"
                value={editUserDetails.phone}
                required
                name="phone"
                onChange={(event) =>
                  dispatch(
                    onChangeHandel({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">
                Website :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Website"
                id="website"
                value={editUserDetails.website}
                required
                name="website"
                onChange={(event) =>
                  dispatch(
                    onChangeHandel({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
              />
            </div>
          </section>
          <div className=" col-10 text-end m-auto ">
            <button type="button" onClick={() => dispatch(saveEditUserDetails())} className="me-3 btn btn-white border border-2">
              Cancel
            </button>
            <button onClick={() => dispatch(saveEditUserDetails())} type="submit" className="btn btn-primary">
              Ok
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditUser;
