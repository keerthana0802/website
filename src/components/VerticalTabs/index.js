import React, { PureComponent } from "react";

import classNames from "classnames";

import "./styles.css";

export default class VerticalTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { view: undefined };
  }

  setView(view) {
    this.setState({ view });
  }

  render() {
    const { children } = this.props;
    const { view } = this.state;

    return (
      <div className="VERTICAL-TABS">
        <div className="VERTICAL-TABS__label">
          {children.map((item, index) => (
            <div key={index} onClick={() => this.setView(index)}>
              <div
                className={classNames("VERTICAL-TABS__label__element", {
                  "VERTICAL-TABS__label__element--active": index === view
                })}
              >
                {item.props.label}
              </div>

              {index === view && (
                <div className="VERTICAL-TABS__content__catalog">
                  {item.props.children}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="VERTICAL-TABS__content">
          {this.props.children.map(
            (item, index) =>
              index === view && (
                <div key={index} className="VERTICAL-TABS__content__element">
                  {item.props.children}
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}
