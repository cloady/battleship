import * as React from 'react';

/**
 * GameRow component.
 */
export default (props: React.Props<void>) => {
  return (
    <div className="game__row">
      {props.children}
    </div>
  );
};
