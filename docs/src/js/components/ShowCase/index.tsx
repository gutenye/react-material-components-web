import * as React from "react";

import * as classNames from "classnames";

import Item from "./Item";

import * as styles from "./styles.scss";

export default class ShowCase extends React.Component<React.HTMLProps<HTMLDivElement> & { large?: boolean }, {}> {
    public static Item = Item;

    public render() {
        let {
            className,
            large,
            ...props,
        } = this.props;
        className = classNames(styles["showcase"], className, {
            [styles["show-case--large"]]: large,
        });

        return (
            <div className={className} {...props} />
        );
    }
}
