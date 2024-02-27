const fs = require('fs');
const json2csv = require('json2csv').parse;

// Path to your JSON file
const jsonFilePath = './tecform.json';

// Read JSON data from file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }
  
    try {
      // Parse JSON string into an array of objects
      const jsonArray = JSON.parse(data);
  
      // Specify fields for CSV
      const fields = ['_id', 'ced', 'name', 'last', 'email', 'phone', 'province', 'city', 'createdAt', 'updatedAt', '__v'];
  
      // Convert JSON array to CSV string
      const csv = json2csv(jsonArray, { fields });
  
      // Save CSV string to a file
      fs.writeFileSync('data.csv', csv);
  
      console.log('CSV file generated successfully.');
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });