import type { ReactNode } from "react";
import { LiaAwardSolid } from "react-icons/lia";
import { RiGovernmentLine } from "react-icons/ri";
import { RiRobot2Line } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import type { IconType } from "react-icons";

export type Highlight = {
  content: ReactNode | "";
  Icon: IconType;
};

export const highlights: Highlight[] = [
  {
    content: (
      <>
        Our{" "}
        <a
          href="https://dl.acm.org/doi/10.1145/3686962"
          target="_blank"
          className="highlight_emph"
        >
          Matchmaking with AI
        </a>{" "}
        paper received the{" "}
        <span className="highlight_emph">
          CSCW24 Best Paper Honorable Mention
        </span>{" "}
        award.
      </>
    ),
    Icon: LiaAwardSolid,
  },
  {
    content: (
      <>
        I was honored to participate in the{" "}
        <span className="highlight_emph">
          White House Office of Science and Technology Policy (OSTP) event
        </span>{" "}
        on Open by Design: Participatory Algorithm for Equity and Inclusion
        {/* and
        give a{" "}
        <span className="highlight_emph">
          keynote at the MIDAS Ethical AI symposium at the University of
          Michigan
        </span>*/}
        .
      </>
    ),
    Icon: RiGovernmentLine,
  },
  {
    content: (
      <>
        We organized a{" "}
        <span className="highlight_emph">
          workshop on Human-AI Alignment: Developing a Research Agenda by
          Bridging Interdisciplinary Approaches
        </span>{" "}
        at the TAS conference!
      </>
    ),
    Icon: RiRobot2Line,
  },
  {
    content: (
      <>
        Our PhD student, Angie Zhang, ran a co-design workshop as part of the{" "}
        <span className="highlight_emph">worker training on AI</span>, which was
        organized by{" "}
        <a
          href="https://www.ilo.org"
          target="_blank"
          className="highlight_emph"
        >
          International Labour Organization
        </a>
        .
      </>
    ),
    Icon: GrWorkshop,
  },
];
