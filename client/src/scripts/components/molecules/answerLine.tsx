// react
import React from 'react'
// molecules
import BubblePart from '@/scripts/components/molecules/bubblePart'
import MemoPart from '@/scripts/components/molecules/memoPart'
// styles
import styles from '@/styles/components/molecules/answerLine.module.sass'

type Props = {
    checkboxNum: number,
    index: number
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <BubblePart
                checkboxNum={props.checkboxNum}
                index={props.index}
            ></BubblePart>
            <MemoPart></MemoPart>
        </div>
    )
}