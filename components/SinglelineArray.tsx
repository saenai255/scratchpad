/** @jsx h */
import { h, FunctionComponent as FC, Fragment } from "preact";

import { Comma, LB, RB } from './Misc.tsx';
import JsValue from './JsValue.tsx'
export interface SinglelineArrayProps {
    NewLine: FC;
    depth: number;
    data: any[];
}

const SinglelineArray: FC<SinglelineArrayProps> = ({ data, depth, NewLine }) => {
    return (
        <Fragment>
            <LB/>{data.map((value, i) => <Fragment><JsValue value={value} depth={depth+1} NewLine={NewLine} /><Comma/></Fragment>)}<RB/>
        </Fragment>
    )
}

export default SinglelineArray