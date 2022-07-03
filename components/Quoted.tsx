/** @jsx h */
import { h, FunctionComponent as FC, Fragment } from "preact";

export interface QuotedProps {
    double?: boolean,
}

const Quoted: FC<QuotedProps> = ({ children, double }) => {
    const quote = double ? '"' : '\'';
    return <Fragment><span class="symbol">{quote}</span>{children}<span class="symbol">{quote}</span></Fragment>
}

export default Quoted