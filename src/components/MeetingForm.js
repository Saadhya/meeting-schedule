import { useState } from "react";

const MeetingForm = () => {
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
  const submit = (e) => {
    console.log(e)
    if (user.name === "" && user.email === "" && user.comment === "") {
      setError({
        name: "Fields are empty",
      });
      return false;
    } else {
      alert("Name:", e);
      // alert("error");
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
      [name]: value,
    });
    // console.log(value);
  };
  return (
    <main>
      <form className="row g-3">
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
            value={user.name}
            required
          />
          {/* <div className="valid-feedback">Looks good!</div> */}
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
            value={user.email}
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
            value={user.comment}
            onChange={handleChange}
          ></textarea>
          {/* <div className="invalid-feedback">{}</div> */}
        </div>

        <div className="col-12">
          <button
            className="btn btn-primary rounded-pill"
            type="submit"
            onClick={submit}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Schedule Event
          </button>
        </div>
      </form>
    </main>
  );
};

export default MeetingForm;
