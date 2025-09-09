const fs = require('fs');
const path = require('path');

const saveToFile = (filename, data) => {
  const filePath = path.join(__dirname, '..', 'data', filename);
  fs.appendFileSync(filePath, JSON.stringify(data) + '\n');
};

exports.saveSyllabus = (req, res) => {
  saveToFile('syllabus.txt', req.body);
  res.json({ message: 'Syllabus saved' });
};

exports.saveDiet = (req, res) => {
  saveToFile('diet.txt', req.body);
  res.json({ message: 'Diet saved' });
};

exports.saveMotivation = (req, res) => {
  saveToFile('motivation.txt', req.body);
  res.json({ message: 'Motivation saved' });
};
