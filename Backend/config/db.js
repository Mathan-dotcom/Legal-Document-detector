// Fake in-memory DB (no MongoDB required)
let fakeDB = {
  users: [{ id: 1, email: "test@example.com", password: "123456" }],
  documents: []
};

module.exports = fakeDB;
