import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <br></br>
      <br></br>

      <form class="was-validated">
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Name" />
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <label for="validationTextarea">Textarea</label>
          <textarea
            class="form-control is-invalid"
            id="validationTextarea"
            placeholder="Required example textarea"
            required
          ></textarea>
          <div class="invalid-feedback">
            Please enter a message in the textarea.
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
