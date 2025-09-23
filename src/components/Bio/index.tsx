import "./bio.css";
import BioLinks from "./Links";

export default function Bio() {
  return (
    <div id="bio">
      <div>
        <img src="img/profile-small-02.png" alt="Min Kyung Lee" id="portrait" />
        <BioLinks />
      </div>

      <div className="bio-text">
        <p>
          I am an assistant professor in the{" "}
          <a href="https://www.ischool.utexas.edu" target="_blank">
            UT Austin School of Information
          </a>
          , and a director of the{" "}
          <a href="https://hai.ischool.utexas.edu/" target="_blank">
            Human-AI Interaction Lab
          </a>
          . I am also core faculty of the campus-wide{" "}
          <a href="https://ethicalai.utexas.edu" target="_blank">
            Ethical AI Program
          </a>
          , and affiliated with{" "}
          <a href="https://ml.utexas.edu" target="_blank">
            Machine Learning Lab
          </a>
          ,{" "}
          <a
            href="https://bridgingbarriers.utexas.edu/good-systems/"
            target="_blank"
          >
            Good Systems
          </a>
          , and{" "}
          <a href="https://robotics.utexas.edu" target="_blank">
            Texas Robotics
          </a>
          . Our work is possible thanks to the{" "}
          <a href="https://nsf.gov" target="_blank">
            National Science Foundation
          </a>
          ,{" "}
          <a
            href="https://bridgingbarriers.utexas.edu/good-systems/"
            target="_blank"
          >
            Good Systems
          </a>
          , and{" "}
          <a href="https://www.vr.se/english.html/" target="_blank">
            Swedish Research Council
          </a>
          .
        </p>

        <p>
          I am a human-computer interaction researcher who combines computer
          science, design, and social science theories and methods. I conducted
          some of the first studies that empiricially examine the AI's social
          implications on{" "}
          <a
            href="materials/Publication/2015-CHI_algorithmic_management.pdf"
            target="_blank"
          >
            work
          </a>
          ,{" "}
          <a
            href="https://journals.sagepub.com/doi/full/10.1177/2053951718756684"
            target="_blank"
          >
            management
          </a>
          , and{" "}
          <a href="https://dl.acm.org/doi/abs/10.1145/3359283" target="_blank">
            governance
          </a>
          . I coined the term{" "}
          <a
            href="materials/Publication/2015-CHI_algorithmic_management.pdf"
            target="_blank"
          >
            Algorithmic Management
          </a>
          , and proposed the{" "}
          <a href="https://dl.acm.org/doi/10.1145/3359284" target="_blank">
            Procedural Justice Framework for AI
          </a>{" "}
          to address the misalignment between AI assumptions and stakeholder
          priorities.
        </p>

        <p>
          My vision is that <span id="biohighlight">Participatory AI</span>,
          which enables stakeholder participation across the AI development
          cycle, can better align AI with stakeholder priorities and contribute
          to creating just, empowering workplaces and cities.
        </p>

        <p>
          I strive to translate my research into pragmatic systems and processes
          to make the real-world impact or support organizations that promote
          equity and social good. Our{" "}
          <a href="https://dl.acm.org/doi/abs/10.1145/3359283" target="_blank">
            WeBuildAI participatory algorithm
          </a>{" "}
          is adopted by{" "}
          <a href="https://foodrescuehero.org" target="_blank">
            Food Rescue Hero
          </a>
          ; we are conducting research to assist public administration using
          technology. Some of our current partners include{" "}
          <a
            href="https://www.austintexas.gov/department/transportation-public-works"
            target="_blank"
          >
            Austin Transportation Department
          </a>
          ,{" "}
          <a href="https://kingcounty.gov" target="_blank">
            King County, Washington
          </a>
          ,{" "}
          <a href="https://foodrescuehero.org" target="_blank">
            Food Rescue Hero
          </a>
          , and{" "}
          <a href="https://www.diligentrobots.com" target="_blank">
            Dilligent Robotics
          </a>
          .
        </p>
      </div>
    </div>
  );
}
