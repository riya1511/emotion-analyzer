declare class EmotionAnalyzer {
    private sentimentAnalyzer;
    private emojiMapping;
    constructor();
    analyze(text: string): string;
    private mapSentimentToEmoji;
}

export { EmotionAnalyzer as default };
