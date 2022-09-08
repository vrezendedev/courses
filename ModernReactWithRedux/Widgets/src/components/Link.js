import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.which) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
