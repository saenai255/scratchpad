/** @jsx h */
import { h, FunctionComponent as FC, Fragment } from "preact";

const padLeft = (ch: number) => new Array((3 - ch.toString().length)).fill('\u00A0').join('')

const makeNewLine = (): FC => {
    let count = 0;
    return () => {
        const lineNo = ++count;
        return (
            <Fragment>
                <br />
                <span class="line-number">{padLeft(lineNo) + lineNo}</span>{'\u00A0\u00A0'}
            </Fragment>
        )
    }
}

export default makeNewLine