// test-db-connection.js
const pool = require('./config/db'); // adjust the path if needed

(async () => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('✅ Database connected successfully!');
    console.log('Test query result:', rows[0].result);
    process.exit(0); // success
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1); // error
  }
})();
