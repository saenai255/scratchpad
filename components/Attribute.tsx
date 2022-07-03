/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

const Attribute: FC = ({ children }) => {
    return <span class="attribute">{children}</span>
}

export default Attribute