/** @jsx h */
import { h, FunctionComponent as FC, Fragment } from "preact";

import { Comma, LC, RC } from './Misc.tsx';
import Tab from './Tab.tsx'
import JsValue from './JsValue.tsx'
export interface MultilineObjectProps {
    NewLine: FC;
    depth: number;
    obj: Record<string, any>;
}

const MultilineObject: FC<MultilineObjectProps> = ({ obj, depth, NewLine }) => {
    return (
        <Fragment>
            <LC/>
            {Object.entries(obj).map(([key, val]) => <Fragment>
                <NewLine/><Tab depth={depth + 1}/>{key}: <JsValue value={val} depth={depth+1} NewLine={NewLine} /><Comma/>
            </Fragment>)}
            <NewLine/><Tab depth={depth} /><RC/>
        </Fragment>
    )
}

export default MultilineObject