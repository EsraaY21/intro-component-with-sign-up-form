import React, { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate fields
    if (!formData.firstName) newErrors.firstName = "First name cannot be empty";
    if (!formData.lastName) newErrors.lastName = "Last name cannot be empty";
    if (!formData.email) {
      newErrors.email = "Email address cannot be empty";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Looks like this is not an email";
    }
    if (!formData.password) newErrors.password = "Password cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted:", formData);
      setErrors({});
    }
  };

  return (
    <>
      <main>
        {/* Left  */}
        <div>
          <h1>Learn to code by watching others</h1>
          <h2>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </h2>
        </div>

        {/* Right  */}
        <div>
          <h3>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </h3>

          <div className="card">
            <form onSubmit={handleSubmit}>
              <InputField
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              <InputField
                type="text"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
              <button type="submit">Claim your free trial</button>
            </form>
            <a className="terms_agreement">
              By clicking the button, you are agreeing to our
              <span href=""> Terms and Services</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
