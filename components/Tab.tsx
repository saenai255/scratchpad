/** @jsx h */
import { h, FunctionComponent as FC, Fragment } from "preact";

export interface TabProps {
    depth?: number;
}

const Tab: FC<TabProps> = ({ depth }) => {
    return <Fragment>{new Array(depth || 1).fill('.').map(str => <span class="tab-dot unselectable">{str}</span>)}</Fragment>
}

export default Tab