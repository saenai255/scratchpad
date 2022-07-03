/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

const Func: FC = ({ children }) => {
    return <span class="func">{children}</span>
}

export default Func