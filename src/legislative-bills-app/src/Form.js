import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from './FormContext';

const interestOptions = [
  "Environmental Protection",
  "Healthcare Reform",
  "Education Funding",
  "Tax Policy",
  "Immigration Reform",
  "Climate Change",
  "Infrastructure",
  "National Security",
  "Social Welfare",
  "Economic Policy"
];

const Form = () => {
  const { formData, updateFormData } = useFormContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    updateFormData({
      interests: checked
        ? [...formData.interests, value]
        : formData.interests.filter(interest => interest !== value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/articles');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Personalize Your Legislative Experience</h2>
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
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Legislative Interests:</label>
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
        </div>
      </div>
      <button type="submit" className="submit-btn">Get Personalized Articles</button>
    </form>
  );
};

export default Form;