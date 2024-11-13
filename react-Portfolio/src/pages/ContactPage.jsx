import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg bg-info">
            <div className="card-body">
              <h2 className="text-center">Contact Me</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
