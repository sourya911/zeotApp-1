import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const createRule = (ruleString) => {
  return axios.post(`${API_URL}/create_rule`, { rule_string: ruleString });
};


export const evaluateRule = (userData) => {
  return axios.post(`${API_URL}/evaluate_rule`, userData);
};

export const fetchRules = async () => {
  const response = await axios.get(`${API_URL}/rules`);
  return response.data; // Return the actual data from the response
};
