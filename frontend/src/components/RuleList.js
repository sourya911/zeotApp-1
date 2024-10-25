// components/RuleList.js
import React from 'react';

const RuleList = ({ rules }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Created Rules:</h2>
      <ul className="list-disc pl-5">
        {rules.map((rule) => (
          <li key={rule._id}> {/* Use rule._id for the key */}
            {rule.ruleString} {/* Render the ruleString */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RuleList;
