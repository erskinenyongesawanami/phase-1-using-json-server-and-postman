const assert = require('assert');

describe('Article POST request', function () {
  it('should add a new article and return it with an ID', async function () {
    const response = await fetch("http://localhost:3000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Fourth Article",
        content: "This was added via fetch!"
      })
    });

    const data = await response.json();

    // Assertion
    assert.ok(data.id, "ID should be present in the response");
    assert.strictEqual(data.title, "Fourth Article");
    assert.strictEqual(data.content, "This was added via fetch!");
  });
});
