const sqlite = require("better-sqlite3-with-prebuilds");
const db = new sqlite("../mytest.db");

exports.db = db;
