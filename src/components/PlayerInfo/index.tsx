import { padStart } from 'lodash';
import * as React from 'react';
import * as classnames from 'classnames';

interface IProps {
    score: Number;
    children: string;
    className: string;
}

export default (props: IProps) => (
    <div className={classnames(props.className, 'playerInfo__display col-xs-6 col-md-6 col-sm-6 col-lg-6')}>
            <span className="playerInfo__score">
                {padStart(props.score.toString(), 3, '0')}
            </span>
        <hr className="playerInfo__divider" />
            <span className="playerInfo__name">
                {props.children}
            </span>
    </div>
);