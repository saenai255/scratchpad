/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

import { Str } from './Misc.tsx';
import Value from './Value.tsx'
import JsObject from './JsObject.tsx'
import JsArray from './JsArray.tsx'
export interface JsValueProps {
    NewLine: FC;
    depth: number;
    value: any;
}

const JsValue: FC<JsValueProps> = ({ value, depth, NewLine }) => {
    switch(true) {
        case typeof value === 'number': {
            return <Value>{value}</Value>
        }
        case typeof value === 'boolean': {
            return <Value>{value ? 'true' : 'false'}</Value>
        }
        case typeof value === 'string': {
            if (value.startsWith('http')) {
                return <Str><a href={value} target="_blank">{value}</a></Str>
            } else if (value.startsWith('mailto:')) {
                return <Str><a href={value}>{value.substring(7)}</a></Str>
            } else if (value.startsWith('tel:')) {
                return <Str><a href={value}>{value.substring(4)}</a></Str>
            } else {
                return <Str>{value}</Str>
            }
        }
        case value instanceof Array: {
            return <JsArray data={value} depth={depth} NewLine={NewLine} />
        }
        case typeof value === 'object': {
            return <JsObject obj={value} depth={depth} NewLine={NewLine} />
        }
        case value instanceof Function: {
            const Comp = value;
            return <Comp depth={depth} NewLine={NewLine}/>
        }
        default: {
            return <Value>null</Value>
        }
    }
}

export default JsValue