const Rule = require('../models/Rule'); // Assuming you have a Rule model defined

// Create a new rule
const createRule = async (req, res) => {
  try {
    const newRule = new Rule(req.body);
    await newRule.save();
    res.status(201).json(newRule);
  } catch (error) {
    res.status(400).json({ error: 'Error creating rule' });
  }
};

// Evaluate a rule based on user data
const evaluateRule = async (req, res) => {
  try {
    const { userData, selectedRule } = req.body;

    if (!userData || !selectedRule) {
      return res.status(400).json({ error: 'User data and selected rule are required' });
    }

    // Replace logical operators in selectedRule and handle comparison operators correctly
    let formattedRule = selectedRule
      .replace(/\bAND\b/g, '&&')
      .replace(/\bOR\b/g, '||')
      .replace(/(\w+)\s*=\s*([^=])/g, '$1 == $2'); // Convert single `=` to `==`

    console.log("Selected Rule:", selectedRule);  // Debugging statement
    console.log("Formatted Rule:", formattedRule); // Debugging statement

    // Define rule function, passing userData fields as arguments
    const ruleFunction = new Function(
      'age', 'department', 'salary', 'experience',
      `return ${formattedRule};`
    );

    // Execute rule function
    const result = ruleFunction(
      userData.age,
      userData.department,
      userData.salary,
      userData.experience
    );

    res.json({ result });
  } catch (error) {
    console.error('Error evaluating rule:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




// Get all rules
const getAllRules = async (req, res) => {
  try {
    const rules = await Rule.find(); // Fetch all rules from the database
    res.status(200).json(rules);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching rules' });
  }
};

module.exports = {
  createRule,
  evaluateRule,
  getAllRules
};
