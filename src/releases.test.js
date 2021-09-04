const releases = require("./releases");



test('Recognizes \"todo-cli_0.1.0_amd64.deb\" as a deb binary', () => {
    expect(releases.typeOfArtefact("todo-cli_0.1.0_amd64.deb")).toBe("deb");
  });
