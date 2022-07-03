/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

const Keyword: FC = ({ children }) => {
    return <span class="keyword">{children}</span>
}

export default Keyword