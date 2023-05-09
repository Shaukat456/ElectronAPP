const dbmgr = require("./conn");

const db = dbmgr.db;

exports.getNames = () => {
  const query = "SELECT * FROM test";
  const stmt = db.prepare(query);
  let res = stmt.all();
  return res;
};
