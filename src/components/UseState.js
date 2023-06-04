import { useState } from "react";
const UseState = () => {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="UseState">
      <div className="Box">
        <label for="username">First Name:</label>
        <input type="text" id="username" name="username" value={formData.name} onChange={handleChange} />
      </div>
      <div className="Box">
        <label for="title">Last Name:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div className="Box">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div className="Box">
        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} />
      </div>
    </div>
  );
};
export default UseState;
