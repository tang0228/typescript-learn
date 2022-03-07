import React from 'react'
import { ChessType, GameStatus as Status } from '../types/enum'

interface IProps {
    next: ChessType.black | ChessType.red
    status: Status
}

export default function GameStatusComp(props: IProps) {
    let content: JSX.Element;
    if (props.status === Status.gameing) {
        if (props.next === ChessType.red) {
            content = <div className='red'>红方落子</div>
        } else {
            content = <div className="black">黑方落子</div>
        }
    } else {
        if (props.status === Status.redWin) {
            content = <div className="win red">红方胜利</div>
        } else if (props.status === Status.blackWin) {
            content = <div className="win black">黑方胜利</div>
        } else {
            content = <div className="win equal">平局</div>
        }
    }
    return (
        <div className='status'>{content}</div>
    )
}
