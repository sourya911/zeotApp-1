import React, { useState } from 'react';
import axios from 'axios';

const departments = [
  'Sales',
  'Marketing',
  'Engineering',
  'HR',
  'Finance',
  'Customer Support',
  'Product',
  'Design'
];

const RuleEvaluationForm = ({ selectedRule }) => {
  const [userData, setUserData] = useState({
    age: '',
    department: '',
    salary: '',
    experience: ''
  });
  
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!selectedRule) {
      setError('Please select a rule before evaluating.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/evaluate_rule', { userData, selectedRule });
      setResult(response.data.result); // Store the result of evaluation
    } catch (err) {
      setError(err.response.data.error || 'An error occurred while evaluating the rule.');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Evaluate User Eligibility</h2>
      {selectedRule && <h3 className="mb-2">Selected Rule: {selectedRule}</h3>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">
            Age:
            <input
              type="number"
              name="age"
              value={userData.age}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            />
          </label>
        </div>
        <div>
          <label className="block mb-2">
            Department:
            <select
              name="department"
              value={userData.department}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            >
              <option value="">Select a department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label className="block mb-2">
            Salary:
            <input
              type="number"
              name="salary"
              value={userData.salary}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            />
          </label>
        </div>
        <div>
          <label className="block mb-2">
            Experience (years):
            <input
              type="number"
              name="experience"
              value={userData.experience}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            />
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Evaluate
        </button>
      </form>
      {result !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">
            Evaluation Result: {result ? 'Eligible' : 'Not Eligible'}
          </h3>
        </div>
      )}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default RuleEvaluationForm;
