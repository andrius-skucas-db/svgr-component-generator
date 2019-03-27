import convertNameToComponentName from "../convertNameToComponentName";

describe("convertNameToComponentName", () => {
  it("Should remove extension", () => {
    const testResult = convertNameToComponentName("icon.svg");

    expect(testResult.includes(".svg")).toEqual(false);
  });

  describe("Should remove special characters", () => {
    const charsToReplace = ["/", "@", "_", "+", ".", "*"];
    charsToReplace.forEach(char => {
      it(`Should remove ${char}`, () => {
        const testResult = convertNameToComponentName("icon./*+@new.svg");

        expect(testResult.includes(char)).toEqual(false);
      });
    });
  });

  it("Should convert to proper component name", () => {
    const testResult = convertNameToComponentName("main- icon./*+@new.svg");

    expect(testResult).toEqual("MainIconNew");
  });
});
