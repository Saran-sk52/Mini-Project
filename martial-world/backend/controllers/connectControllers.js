const fs = require('fs');
const path = require('path');

const saveToFile = (filename, data) => {
  const filePath = path.join(__dirname, '..', 'data', filename);
  fs.appendFileSync(filePath, JSON.stringify(data) + '\n');
};

exports.postComment = (req, res) => {
  saveToFile('comments.txt', req.body);
  res.json({ message: 'Comment saved' });
};

exports.postReview = (req, res) => {
  saveToFile('reviews.txt', req.body);
  res.json({ message: 'Review saved' });
};
