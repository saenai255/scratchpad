/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

const InlineComment: FC = ({ children }) => {
    return <span class="comment">/* {children} */</span>
}

export default InlineComment