import Sentiment from "sentiment";

interface EmojiMapping {
  [key: string]: string; // Mapping between sentiment and emoji
}

class EmotionAnalyzer {
  private sentimentAnalyzer: Sentiment;
  private emojiMapping: EmojiMapping;

  constructor() {
    this.sentimentAnalyzer = new Sentiment();
    this.emojiMapping = {
      positive: "😊",
      negative: "😢",
      neutral: "😐",
    };
  }

  analyze(text: string): string {
    const sentimentResult = this.sentimentAnalyzer.analyze(text);
    return this.mapSentimentToEmoji(sentimentResult.score);
  }

  private mapSentimentToEmoji(sentimentScore: number): string {
    if (sentimentScore > 0) {
      return this.emojiMapping.positive;
    } else if (sentimentScore < 0) {
      return this.emojiMapping.negative;
    } else {
      return this.emojiMapping.neutral;
    }
  }
}

export default EmotionAnalyzer;
