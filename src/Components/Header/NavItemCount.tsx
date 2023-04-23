import React from "react";

export default function NavItemCount(props: any) {
  const [items, totalCount] = props.props;

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={totalCount > 0 ? "nav-item-count" : "nav-item-count hide"}>
      {totalCount}
    </div>
  );
}
