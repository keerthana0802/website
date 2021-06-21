import React, { PureComponent } from "react";

export default class VerticalTabsItem extends PureComponent {
  render() {
    const { label, children, ...otherProps } = this.props;
    return children ? (
      <div>
        {label}
        {children}
      </div>
    ) : (
      undefined
    );
  }
}

