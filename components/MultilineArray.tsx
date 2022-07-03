/** @jsx h */
import { h, FunctionComponent as FC, Fragment } from "preact";

import { Comma, LB, RB } from './Misc.tsx';
import Tab from './Tab.tsx'
import JsValue from './JsValue.tsx'
export interface MultilineArrayProps {
    NewLine: FC;
    depth: number;
    data: any[];
}

const MultilineArray: FC<MultilineArrayProps> = ({ data, depth, NewLine }) => {
    return (
        <Fragment>
            <LB/>
            {data.map((value, i) => <Fragment>
                <NewLine/><Tab depth={depth + 1}/><JsValue value={value} depth={depth+1} NewLine={NewLine} />{i < data.length - 1 ? <Comma/> : ''}
            </Fragment>)}
            <NewLine/><Tab depth={depth} /><RB/>
        </Fragment>
    )
}

export default MultilineArray