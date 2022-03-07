import React from 'react';
import { ChessType, GameStatus } from '../types/enum';
import Board from './Board';
import GameStatusComp from './GameStatusComp';

interface IState {
    chesses: ChessType[]
    gameStatus: GameStatus
    nextChess: ChessType.black | ChessType.red
}

export default class Game extends React.Component<{}, IState> {

    state: IState = {
        chesses: [],
        gameStatus: GameStatus.gameing,
        nextChess: ChessType.black
    }

    componentDidMount = () => {
        this.init();
    }

    /**
     * 初始化棋盘
     */
    init() {
        let arr: ChessType[] = [];
        for (let index = 0; index < 9; index++) {
            arr.push(ChessType.none);
        }
        this.setState({
            chesses: arr,
            gameStatus: GameStatus.gameing,
            nextChess: ChessType.black,
        })
    }

    /**
     * 点击棋子的事件
     * @param n 
     */
    handleChessClick(n: number) {
        let chesses: ChessType[] = [...this.state.chesses];
        chesses[n] = this.state.nextChess;
        this.setState((pre) => ({
            chesses,
            gameStatus: this.getGameStatus(chesses, n),
            nextChess: pre.nextChess === ChessType.red ? ChessType.black : ChessType.red,
        }))
    }

    getGameStatus(chesses: ChessType[], n: number): GameStatus {
        let horMin = Math.floor(n / 3) * 3;
        let verMin = n % 3;
        if (
            (chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2])
            || (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6])
            || (chesses[0] === chesses[5] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none)
            || (chesses[2] === chesses[5] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)
        ) {
            if (chesses[n] === ChessType.red) {
                return GameStatus.redWin;
            } else {
                return GameStatus.blackWin;
            }
        }

        // 如果棋盘没有可以落子的位置
        if (!chesses.includes(ChessType.none)) {
            return GameStatus.equal;
        }

        return GameStatus.gameing;
    }

    render() {
        return (
            <div className='game'>
                <GameStatusComp next={this.state.nextChess} status={this.state.gameStatus} />
                <Board
                    types={this.state.chesses}
                    onClick={this.handleChessClick.bind(this)}
                    isGameOver={this.state.gameStatus !== GameStatus.gameing}
                />
                <button onClick={this.init.bind(this)}>重新开始</button>
            </div>
        )
    }
}
