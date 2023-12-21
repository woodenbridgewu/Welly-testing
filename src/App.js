import React, { useState } from "react";
import BoxContainer from "./modals/BoxContainer";
import Question1 from "./questions/Question1";
import Question2 from "./questions/Question2";
import Question3 from "./questions/Question3";
import Question5 from "./questions/Question5";
import ExpandableSection from "./components/ExpandableSection";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <BoxContainer>
      <ExpandableSection
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      {isExpanded && (
        <div className="questions-container">
          <Question1 />
          <Question2 />
          <Question3 />
          <Question5 />
        </div>
      )}
    </BoxContainer>
  );
}

export default App;
