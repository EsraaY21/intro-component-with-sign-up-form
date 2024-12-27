import React, { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    if (!firstName || !lastName || !email || !password) {
      setError(true);
    } else {
      setError(false);
      console.log("Form submitted:", formData);
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
                error={error && !formData.firstName}
              />
              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                error={error && !formData.lastName}
              />
              <InputField
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                error={error && !formData.email}
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                error={error && !formData.password}
              />
              <button type="submit">Claim your free trial</button>
            </form>
            <p className="terms_agreement">
              <span>By clicking the button, you are agreeing to our </span>
              <a href=""> Terms and Services</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
