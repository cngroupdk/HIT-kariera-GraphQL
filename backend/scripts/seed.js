const { seed } = require('../src/libs/sqlite');

async function main() {
  try {
    await seed();
    console.log('Database seeded, all ok!');
  } catch (e) {
    console.log('--- Error:');
    console.log(e.message);
    process.exit(1);
  }
}

main();
