/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

const Comment: FC = ({ children }) => {
    return <span class="comment">// {children}</span>
}

export default Comment