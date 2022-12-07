import { useState } from "react";
import { Modal } from "./Modal";

const MeetingForm = () => {
  const [flag, setFlag] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const submit = () => {
    // alert(user.name);
    if (user.name === "" || user.email === "" || user.comment === "") {
      setError({
        name: "Fields are empty",
      });
      return false;
    } else {
      // alert("Name:", user.name);
      setFlag(true);
      // return <Modal data={user.email}></Modal>;
    }

    //   setError({
    //     email: "Please Enter Email ID",
    //   });
    //   return false;
    //   setError({
    //     name: "Please Enter Name",
    //   });
    //   return false;
    //   setError({
    //     comment: "Please Enter comment",
    //   });
    //   return false;
    // }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    // console.log(value);
  };
  return (
    <main>
      <form className="row g-3" id="meet-form">
        <div className="mb-3 col-md-6 col-12">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-bold"
          >
            Name*
          </label>
          <input
            className="form-control"
            id="name"
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={user.name || ""}
            required
          />
          {/* <div className="invalid-feedback">Doesn't Look good!</div> */}
        </div>
        <div className="mb-3 col-md-6 col-12"></div>

        <div className="mb-3 col-md-6 col-12">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-bold"
          >
            Email address*
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            onChange={handleChange}
            value={user.email || ""}
            required
          />
          {/* <div className="valid-feedback">Looks good!</div> */}
        </div>
        <div className="mb-3 col-md-6 col-12"></div>

        {/* button */}
        <div className="mb-3 col-md-3 col-12">
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill w-20"
          >
            Add Guests
          </button>
        </div>
        <div className="mb-3 col-md-6 col-12"></div>

        <div className="mb-3 col-md-6 col-12">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label fw-bold"
          >
            Please share anything that will help prepare for our meeting.
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            name="comment"
            rows="3"
            onChange={handleChange}
            value={user.comment || ""}
            // required
          ></textarea>
          {/* <div className="invalid-feedback">{}</div> */}
        </div>
        <p className="lead text-danger fw-bolder">{error.name}</p>

        <div className="col-12">
          <button
            // type="submit"
            className="btn btn-primary rounded-pill"
            onClick={submit}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Schedule Event
          </button>
        </div>
      </form>
      <Modal data={user}></Modal>
    </main>
  );
};

export default MeetingForm;
