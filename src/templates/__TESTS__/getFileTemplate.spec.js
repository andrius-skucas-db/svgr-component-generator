import getFileTemplate from "../getFileTemplate";

describe("getFileTemplate", () => {
  it("getFileTemplate", () => {
    const filesToInclude = [
      {
        name: "icon.svg",
        componentName: "Icon"
      },
      {
        name: "icon-2.svg",
        componentName: "Icon2"
      }
    ];
    const testResult = getFileTemplate("IconComponent", filesToInclude);

    expect(testResult).toMatchSnapshot();
  });
});
