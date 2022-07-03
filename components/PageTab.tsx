/** @jsx h */
import { h, FunctionComponent as FC } from "preact";

export interface PageTabProps {
    active?: boolean;
    href: string;
}

const PageTab: FC<PageTabProps> = ({ children, active, href }) => {
    return <a href={href} class={'page-tab' + (active ? ' active': '')}>{children}</a>
}

export default PageTab