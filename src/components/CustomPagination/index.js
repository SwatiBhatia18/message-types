import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './CustomPagination.module.scss'

const CustomPagination = ({
  next_disabled,
  current,
  onChange
}) => {
  
  const onClickPrev = () => {
    if (current - 1 > 0)
      onChange(current - 1)
  }

  const onClickNext = () => {
    if (!next_disabled && current)
      onChange(current + 1)
  }

  return (
    <ul className={styles.customPaginationContainer}>
      <li
        className={`${styles.paginationItem} ${current === 1 ? "ori-font-light ori-cursor-not-allowed" : ""}`}
        onClick={onClickPrev}
      >
        {"<"}
      </li>
      {
        current >= 2 &&
        <li
        className={`${styles.paginationItem} ori-border-default`}
          onClick={onClickPrev}
        >
          {current - 1}
        </li>
      }
      <li className={`${styles.paginationItem} ori-border-primary ori-font-primary ori-font-bold`}>{current}</li>
      {
        !next_disabled &&
        <li
          className={`${styles.paginationItem} ori-border-default`}
          onClick={onClickNext}
        >
          {current + 1}
        </li>
      }
      <li
        className={`${styles.paginationItem} ${next_disabled ? "ori-font-light ori-cursor-not-allowed" : ""}`}
        onClick={onClickNext}
      >
        {">"}
      </li>
    </ul>
  )
}

CustomPagination.propTypes = {
  current: PropTypes.number.isRequired,
  next_disabled: PropTypes.bool,
  onChange: PropTypes.func
}

CustomPagination.defaultProps = {
  current: 1,
  next_disabled: false,
  onChange: () => {}
}

export default CustomPagination