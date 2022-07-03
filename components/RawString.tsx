/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

const RawString: FC = ({ children }) => {
    return <span class="string">{children}</span>
}

export default RawString