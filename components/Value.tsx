/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

const Value: FC = ({ children }) => {
    return <span class="value">{children}</span>
}

export default Value