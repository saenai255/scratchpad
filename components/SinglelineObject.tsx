/** @jsx h */
import { h, FunctionComponent as FC, Fragment } from "preact";

import { Comma, LC, RC} from './Misc.tsx'
import JsValue from './JsValue.tsx'
export interface SinglelineObjectProps {
    NewLine: FC;
    depth: number;
    obj: Record<string, any>;
}

const SinglelineObject: FC<SinglelineObjectProps> = ({ obj, depth, NewLine }) => {
    return (
        <Fragment>
            <LC/> {Object.entries(obj).map(([key, val]) => <Fragment>
                {key}: <JsValue value={val} depth={depth+1} NewLine={NewLine} /><Comma/></Fragment>)}
            <RC/>
        </Fragment>
    )
}

export default SinglelineObject