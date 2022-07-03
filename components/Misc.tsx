/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

import Quoted from './Quoted.tsx';
import RawString from './RawString.tsx';
import Symbol from './Symbol.tsx';
import Keyword from './Keyword.tsx';

export const Str: FC = ({ children }) => <Quoted><RawString>{children}</RawString></Quoted>
export const Comma: FC = () => <Symbol>,</Symbol>
export const Colon: FC = () => <Symbol>;</Symbol>
export const LB: FC = () => <Keyword>[</Keyword>
export const RB: FC = () => <Keyword>]</Keyword>
export const LC: FC = () => <Keyword>{'{'}</Keyword>
export const RC: FC = () => <Keyword>{'}'}</Keyword>

const x = 2;