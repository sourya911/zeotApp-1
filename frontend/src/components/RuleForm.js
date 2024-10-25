import { useState } from 'react';

function RuleForm({ onSubmit }) {
  const [ruleString, setRuleString] = useState('');
  const [error, setError] = useState(null); // For form validation errors

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ruleString.trim()) {
      setError('Rule cannot be empty');
      return;
    }
    onSubmit(ruleString);
    setRuleString('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded mb-4">
      <input
        type="text"
        placeholder="Enter rule"
        value={ruleString}
        onChange={(e) => setRuleString(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Create Rule
      </button>
    </form>
  );
}

export default RuleForm;
