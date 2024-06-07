import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Dibyendu Das</h2>
      <Panel
        title="About my venus"
        active={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Venus is the planet of love, relationships, and harmony. In Gemini, it
        suggests a love of communication, intellectual stimulation, and variety
        in relationships. You may be attracted to partners who are witty,
        versatile, and sociable.
      </Panel>
      <Panel
        title="About my Mars"
        active={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Mars represents passion, drive, and how you assert yourself. In Cancer,
        it suggests that you are protective and nurturing in love. You value
        emotional security and may sometimes struggle with balancing your need
        for intimacy and independence.
      </Panel>
      <Panel
        title="About my loura"
        active={activeIndex === 2 && true}
        onActive={() => setActiveIndex(2)}
      >
        Mars represents passion, drive, and how you assert yourself. In Cancer,
        it suggests that you are protective and nurturing in love. You value
        emotional security and may sometimes struggle with balancing your need
        for intimacy and independence.
      </Panel>
    </>
  );
}
