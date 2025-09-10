import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.scss";

function Button({disable = false, loading = false, size = "normal", className, href, primary = false, bordered = false, rounded = false, children, ...passProps }) {
    const classNames = clsx(styles.wrapper, className, {
        [styles.primary]: primary,
        [styles.bordered]: bordered,
        [styles.rounded]: rounded,
        [styles.disable]: disable,
    });

    let Component = href ? "a" : "button";

  return (
    <Component {...passProps} href={href} className={clsx(classNames, styles[size])}>
      <span className={loading ? styles.hiddenText : ""}>
        {children}
      </span>

      {loading && <span className={styles.spinner}></span>}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  disable: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
