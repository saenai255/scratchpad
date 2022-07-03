/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

import MultilineObject from './MultilineObject.tsx'
import SinglelineObject from './SinglelineObject.tsx'
export interface JsObjectProps {
    NewLine: FC;
    depth: number;
    obj: Record<string, any>;
}

const MAX_OBJ_PROPS = 2;
const MAX_LINE_LENGTH = 40;
const JsObject: FC<JsObjectProps> = ({ obj, depth, NewLine }) => {
    const entries = Object.entries(obj);
    if (
        entries.length > MAX_OBJ_PROPS ||
        entries.find(([_, value]) => !['string', 'number', 'boolean'].includes(typeof value)) ||
        entries.map(([key, value]) => key + value).join(', ').length > MAX_LINE_LENGTH
        ) {
        return <MultilineObject obj={obj} depth={depth} NewLine={NewLine} />
    }

    return <SinglelineObject obj={obj} depth={depth} NewLine={NewLine} />
}

export default JsObject