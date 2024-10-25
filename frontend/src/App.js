import { useState, useEffect } from 'react';
import RuleForm from './components/RuleForm';
import RuleList from './components/RuleList';
import RuleEvaluationForm from './components/RuleEvaluationForm';
import { createRule, evaluateRule, fetchRules } from './services/api';

function App() {
  const [rules, setRules] = useState([]); // Store created rules
  const [selectedRule, setSelectedRule] = useState(''); // Store selected rule
  const [evaluationResult, setEvaluationResult] = useState(null); // Store evaluation result
  const [loading, setLoading] = useState(false); // Loading state for API requests
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const loadRules = async () => {
      try {
        const rulesData = await fetchRules(); // Use await to get the data
        setRules(Array.isArray(rulesData) ? rulesData : []); 
        console.log(rulesData)
      } catch (error) {
        setError('Failed to load rules. Please try again.');
      }
    };
    loadRules()

  }, []);

 const handleCreateRule = async (ruleString) => {
  setLoading(true);
  setError(null);
  try {
    const newRule = await createRule(ruleString); // Call API to create a rule and get the new rule object
    setRules((prevRules) => [...prevRules, newRule]); // Add the entire rule object to the list
  } catch (error) {
    setError('Failed to create rule. Please try again.');
  } finally {
    setLoading(false); // Stop loading
  }
};



  const handleEvaluateRule = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await evaluateRule(userData); // Call API to evaluate rule
      setEvaluationResult(response.data.result); // Store evaluation result
    } catch (error) {
      setError('Failed to evaluate rule. Please check your input.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Rule Engine Application</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error */}

      <RuleForm onSubmit={handleCreateRule} /> {/* Form to create rule */}
      
      <RuleList rules={rules} /> {/* List of created rules */}

      <div className="mb-4">
  <label className="block mb-2">Select Rule:</label>
  <select
    value={selectedRule}
    onChange={(e) => setSelectedRule(e.target.value)}
    className="border p-2 w-full rounded"
  >
    <option value="">Select a rule</option>
    {rules.map((rule) => (
      <option key={rule._id} value={rule.ruleString}> {/* Use rule.ruleString for value */}
        {rule.ruleString} {/* Render the ruleString */}
      </option>
    ))}
  </select>
</div>


      <RuleEvaluationForm 
        onSubmit={handleEvaluateRule} 
        selectedRule={selectedRule} // Pass selected rule to evaluation form
      />
      
      {loading && <div className="text-blue-500">Loading...</div>} {/* Show loading */}
      
      {evaluationResult !== null && (                             
        <div className="bg-white p-4 mt-4 shadow-md rounded">
          <h3 className="text-lg font-bold">
            Evaluation Result: {evaluationResult ? 'Eligible' : 'Not Eligible'}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
