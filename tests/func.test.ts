import EmotionAnalyzer from "../src/index";

test("find the emotion related to the text1", () => {
  const analyzer = new EmotionAnalyzer();
  const result = analyzer.analyze("I love coding!");
  expect(result).toEqual("😊");
});

test("find the emotion related to the text2", () => {
  const analyzer = new EmotionAnalyzer();
  const result = analyzer.analyze("This is terrible.");
  expect(result).toEqual("😢");
});
