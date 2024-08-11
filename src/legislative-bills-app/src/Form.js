// Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const interestOptions = [
  "Sports & Fitness",
  "Finance and Investing",
  "Music Entertainment",
  "Movies",
  "Travelling",
  "Information Technology",
  "Fashion Enthusiasts",
  "Cooking",
  "Gardening",
  "Law"
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    description: '',
    interests: [],
    otherInterest: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, interests: [...prevData.interests, value] };
      } else {
        return { ...prevData, interests: prevData.interests.filter(interest => interest !== value) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    navigate('/articles');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Interests:</label>
        <div className="checkbox-group">
          {interestOptions.map((interest) => (
            <div key={interest} className="checkbox-item">
              <input
                type="checkbox"
                id={interest}
                name="interests"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleInterestChange}
              />
              <label htmlFor={interest}>{interest}</label>
            </div>
          ))}
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="other"
              name="interests"
              value="Other"
              checked={formData.interests.includes("Other")}
              onChange={handleInterestChange}
            />
            <label htmlFor="other">Other</label>
            {formData.interests.includes("Other") && (
              <input
                type="text"
                name="otherInterest"
                value={formData.otherInterest}
                onChange={handleChange}
                placeholder="Please specify"
              />
            )}
          </div>
        </div>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default Form;