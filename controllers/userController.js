const db = require('../db');

exports.getUsers = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT 1 as result');
    res.json(rows);
  } catch (err) {
    next(err);
  }
};
