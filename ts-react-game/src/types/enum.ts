export enum ChessType {
    none,
    red,
    black
}

export enum GameStatus {
    /**
     * 游戏中
     */
    gameing,
    /**
     * 黑方胜利
     */
    blackWin,
    /**
     * 红方胜利
     */
    redWin,
    /**
     * 平局
     */
    equal
}