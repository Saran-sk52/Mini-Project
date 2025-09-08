const express = require('express');
const router = express.Router();
const {
  saveSyllabus,
  saveDiet,
  saveMotivation
} = require('../controllers/trackController');

router.post('/syllabus', saveSyllabus);
router.post('/diet', saveDiet);
router.post('/motivation', saveMotivation);

module.exports = router;
