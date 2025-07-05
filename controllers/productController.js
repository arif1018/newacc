const db = require('../db');

exports.getProducts = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT 1 as result');
    res.json(rows);
  } catch (err) {
    next(err);
  }
};
