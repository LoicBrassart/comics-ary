const faker = require('faker');

let query = `INSERT INTO comic (title, author, illustrator, year_start, resume, picture) VALUES `;
const rows = [];
faker.locale = "fr";

for (let i = 0; i < 100; i++) {
    const oneRow = faker.fake("('{{random.words}}', '{{name.firstName}} {{name.lastName}}', '{{name.firstName}} {{name.lastName}}', {{random.number}}, '{{lorem.sentences}}', '{{image.imageUrl}}') ");
    rows.push(oneRow)
}
query += rows.join(",")

console.log(query)

// If you wanna launch this script: node generateFixtures.js > fixtures.sql
// Once it's generated, you can import it through the console, or copy/paste it's content in WBench