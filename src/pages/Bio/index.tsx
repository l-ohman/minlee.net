import { Link } from "react-router-dom";
import "./bio.css";

export default function BioPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Min Kyung Lee</h1>
      <div id="bio-page">
        <div id="bio-photos">
          <img src="img/profile-small.png" alt="Min portrait photo" />
          <img src="img/bio-mklee-robot-2.png" alt="Min with Robot" />
          <img src="img/mklee-4.png" alt="Min skiing" />
          <img src="img/mklee-2.png" alt="Min hiking" />
        </div>

        <div>
          <h2 id="bio-title">Biography</h2>

          <p>
            Min Kyung Lee is an assistant professor in the{" "}
            <a
              href="https://www.ischool.utexas.edu"
              target="_blank"
              className="bio-text"
            >
              School of Information
            </a>{" "}
            at{" "}
            <a
              href="https://www.utexas.edu"
              target="_blank"
              className="bio-text"
            >
              the University of Texas at Austin
            </a>
            . She has been a director of a{" "}
            <a
              href="https://hai.ischool.utexas.edu/"
              target="_blank"
              className="bio-text"
            >
              Human-AI Interaction Lab
            </a>{" "}
            since 2016. She is affiliated with UT Austin{" "}
            <a
              href="https://ml.utexas.edu"
              target="_blank"
              className="bio-text"
            >
              Machine Learning Lab
            </a>{" "}
            &#8212; one of{" "}
            <a
              href="https://www.nsf.gov/cise/ai.jsp"
              target="_blank"
              className="bio-text"
            >
              the first NSF funded national AI research institutes
            </a>
            ,{" "}
            <a
              href="https://bridgingbarriers.utexas.edu/good-systems/"
              target="_blank"
              className="bio-text"
            >
              Good Systems
            </a>{" "}
            &#8212; a UT Austin 8-year Grand Challenge to design responsible AI
            technologies, and{" "}
            <a
              href="https://robotics.utexas.edu"
              target="_blank"
              className="bio-text"
            >
              Texas Robotics
            </a>
            . Previously, she was a research scientist in the Machine Learning
            Department at Carnegie Mellon University. <br />
            <br />
            Dr. Lee has conducted some of the first studies that empirically
            examine the social implications of algorithms’ emerging roles in
            management and governance in society. She has extensive expertise in
            developing theories, methods and tools for human-centered AI and
            deploying them in practice through collaboration with real-world
            stakeholders and organizations. She developed a participatory
            framework that empowers community members to design matching
            algorithms that govern their own communities.
            <br />
            <br />
            Her current research is inspired by and complements her previous
            work on social robots for long-term interaction, seamless
            human-robot handovers, and telepresence robots.
            <br />
            <br />
            Dr. Lee is a Siebel Scholar and has received the Allen Newell Award
            for Research Excellence, research grants from NSF and Uptake, and
            eight best paper awards and honorable mentions and two demo/video
            awards in venues such as CHI, CSCW, DIS, HRI and MobiSys. She is an
            Associate Editor of{" "}
            <a
              href="https://www.tandfonline.com/action/journalInformation?show=editorialBoard&amp;journalCode=hhci20"
              target="_blank"
              className="bio-text"
            >
              Human-Computer Interaction
            </a>{" "}
            and served as a Senior Associate Editor of{" "}
            <a
              href="https://dl.acm.org/journal/thri/editorial-board"
              target="_blank"
              className="bio-text"
            >
              ACM Transactions on Human-Robot Interaction
            </a>{" "}
            from 2017-2023. Her work has been featured in media outlets such as
            the New York Times, New Scientist, Washington Post, MIT Technology
            Review and CBS. She received a PhD and a MS in Human-Computer
            Interaction and an MDes in Interaction Design from Carnegie Mellon
            University and a BS from KAIST.
            <br />
            <br />
            Dr. Lee is an aspiring explorer. She hiked in 25 national parks in 5
            countries, and skied in the U.S., Canada, Italy, France,
            Switzerland, Japan, and Korea.
          </p>
        </div>
      </div>
    </div>
  );
}
