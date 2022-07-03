/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

import MultilineArray from './MultilineArray.tsx'
import SinglelineArray from './SinglelineArray.tsx'
export interface JsArrayProps {
    NewLine: FC;
    depth: number;
    data: any[];
}

const MAX_OBJ_PROPS = 3;
const MAX_LINE_LENGTH = 40;
const JsArray: FC<JsArrayProps> = ({ data, depth, NewLine }) => {
    if (
        data.length > MAX_OBJ_PROPS ||
        data.find((value) => !['string', 'number', 'boolean'].includes(typeof value)) ||
        data.join(', ').length > MAX_LINE_LENGTH
        ) {
        return <MultilineArray data={data} depth={depth} NewLine={NewLine} />
    }

    return <SinglelineArray data={data} depth={depth} NewLine={NewLine} />
}

export default JsArray