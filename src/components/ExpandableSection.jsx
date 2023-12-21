import React from "react";

function ExpandableSection({ isExpanded, setIsExpanded }) {
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <button className="expandable-button" onClick={toggleExpand}>
        {isExpanded ? "問題4 條件渲染 - 收合" : "問題4 條件渲染 - 展開"}
      </button>
    </div>
  );
}

export default ExpandableSection;
