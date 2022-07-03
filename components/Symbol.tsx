/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

const Symbol: FC = ({ children }) => {
    return <span class="symbol">{children}</span>
}

export default Symbol