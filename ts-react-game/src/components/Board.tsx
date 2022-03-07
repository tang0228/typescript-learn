import React from 'react';
import { ChessType } from '../types/enum';
import ChessItem from './ChessItem';
import "./Board.css";

interface IProps {
    types: ChessType[]
    isGameOver?: boolean
    onClick?: (n: number) => void
}

const Board: React.FC<IProps> =  function (props) {
    const isGameOver = props.isGameOver!; // ```!``` TS 不考虑数据为空的情况
    // const isGameOver = props.isGameOver as boolean; // 类型断言
    const list = props.types.map((t, i) => <ChessItem type={t} onClick={() => {
        if(props.onClick && !isGameOver) {
            props.onClick(i)
        }
    }} key={i} />)
    return (
        <div className='board'>{list}</div>
    )
}

Board.defaultProps = {
    isGameOver: false
}

export default Board;
