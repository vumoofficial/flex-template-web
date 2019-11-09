import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './CustomBecomeHost.css';

const CustomBecomeHost = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="CustomBecomeHost.titleLineOne" />
        <br />
        <FormattedMessage id="CustomBecomeHost.titleLineTwo" />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="CustomBecomeHost.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="CustomBecomeHost.part1Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="CustomBecomeHost.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="CustomBecomeHost.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="CustomBecomeHost.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="CustomBecomeHost.part3Text" />
          </p>
        </div>
      </div>

      <div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="CustomBecomeHost.createListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

CustomBecomeHost.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

CustomBecomeHost.propTypes = {
  rootClassName: string,
  className: string,
};

export default CustomBecomeHost;
