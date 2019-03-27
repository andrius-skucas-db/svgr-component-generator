import filterOutHiddenFiles from "../filterOutHiddenFiles";

describe("filterOutHiddenFiles", () => {
  it("Should return false if file starts with .", () => {
    const testResult = filterOutHiddenFiles(".file.svg");

    expect(testResult).toBe(false);
  });

  it("Should return true if file does not starts with .", () => {
    const testResult = filterOutHiddenFiles("file.svg");

    expect(testResult).toBe(true);
  });
});
