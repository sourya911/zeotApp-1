const express = require('express');
const {
  createRule, // Controller for creating a rule
  evaluateRule, // Controller for evaluating a rule
  getAllRules // Controller for fetching all rules
} = require('../controllers/ruleController');

const router = express.Router();

// Route to create a new rule
// POST /api/create_rule
router.post('/create_rule', createRule);

// Route to evaluate a selected rule
// POST /api/evaluate_rule
router.post('/evaluate_rule', evaluateRule);

// Route to get all rules
// GET /api/rules
router.get('/rules', getAllRules);

module.exports = router;
