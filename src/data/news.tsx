import type { ReactNode } from "react";

export type NewsItem = {
  date: string;
  content: ReactNode;
};

/* The number of news items before "show more" appears */
export const VISIBLE_NEWS_COUNT = 10;

export const newsItems: NewsItem[] = [
  {
    date: "November 2024",
    content: (
      <>
        Co-organizing ACM CSCW 2024 workshop" Worker Data Collectives as a Means
        to Improve Accountability, Combat Surveillance and Reduce Inequalities
      </>
    ),
  },
  {
    date: "October 2024",
    content: (
      <>
        Co-organizing the EURAM 2025 paper track on AI, Big Data, Algorithmic
        Management and Emerging Tech in Human Resources Management, Employment
        Relations, and Organizational Behaviours
      </>
    ),
  },
  {
    date: "September 2024",
    content: (
      <>
        Co-organized a TAS workshop, "Human-AI Alignment: Developing a Research
        Agenda by Bridging Interdisciplinary Approaches"
      </>
    ),
  },
  {
    date: "July 2024",
    content: (
      <>
        Honored to serve as a panelist at the White House Office of Science and
        Technology Policy (OSTP) event on Open by Design: Participatory
        Algorithm for Equity and Inclusion
      </>
    ),
  },
  {
    date: "June 2024",
    content: (
      <>
        Served as a panelist at the Association of Public & Land-Grant
        Universities’s Commission on Information, Measurement, and Analysis
        Panel: AI Empowered Student Engagement and Success
      </>
    ),
  },
  {
    date: "April 2024",
    content: (
      <>
        Gave a lecture as William Field Pierson Lecturer at Princeton University
      </>
    ),
  },
  {
    date: "April 2024",
    content: (
      <>
        Gave a keynote at the MIDAS Ethical AI symposium at the University of
        Michigan, Ann Arbor, MI
      </>
    ),
  },
  {
    date: "April 2024",
    content: (
      <>
        Received the Health IT SPARK grant on AI chatbot for dementia caregivers
        with hearing/vision impairment
      </>
    ),
  },
  {
    date: "November 2023",
    content: (
      <>
        Served as a panelist for ACM CSCW panel, "LLMs and the Infrastructure of
        CSCW"
      </>
    ),
  },
  {
    date: "October 2023",
    content: (
      <>
        Served as a panelist at (Dis)Trust and AI: Perspectives from Across
        Disciplines and Sectors
      </>
    ),
  },
  {
    date: "July 2023",
    content: (
      <>
        Received the Swedish Research Council grant on algorithmic management at
        work. Excited to explore worker-centered interventions for algorithmic
        management on a global scale
      </>
    ),
  },
  {
    date: "June 2023",
    content: (
      <>
        Awarded the NSF SCC grant on community-driven design of urban air
        mobility transportation management systems
      </>
    ),
  },
  {
    date: "November 2022",
    content: (
      <>
        Co-organizing an ACM CSCW workshop, “Who Has an Interest in “Public
        Interest Technology”?: Critical Questions for Working with Local
        Governments and Impacted Communities”
      </>
    ),
  },
  {
    date: "October 2022",
    content: <>Gave a talk at the Karolinska Institutet in Stockholm, Sweden</>,
  },
  {
    date: "October 2022",
    content: (
      <>
        Gave a keynote at the Augmented Intelligence at Work Symposium in
        Hanover, Germany
      </>
    ),
  },
  {
    date: "October 2022",
    content: (
      <>
        Excited to NSF DASS funding on enabling standards- and disclosure-based
        regulations in and through software systems
      </>
    ),
  },
  {
    date: "October 2022",
    content: (
      <>
        Received NSF CIVIC funding on co-creating a community platform for
        people experiencing homelessness
      </>
    ),
  },
  {
    date: "September 2022",
    content: <>Gave a keynote at the Image Conference in Austin</>,
  },
  {
    date: "July 2022",
    content: <>Gave a talk at IDEA Institute on AI</>,
  },
  {
    date: "May 2022",
    content: (
      <>
        Excited to give a talk at the University of Oxford on Participatory
        Algorithmic Management
      </>
    ),
  },
  {
    date: "April 2022",
    content: (
      <>
        Received an ACM CHI Best Paper Honorable Mention award for Remaining
        gigwork
      </>
    ),
  },
  {
    date: "April 2022",
    content: (
      <>
        Served as a panelist for ACM CHI’22 panel on Participatory Design of AI
        systems
      </>
    ),
  },
  {
    date: "April 2022",
    content: (
      <>
        Honored to give a talk as a Dr. Frederica Darema lecturer in CS at
        Illinois Institute of Technology
      </>
    ),
  },
  {
    date: "March 2022",
    content: (
      <>
        Co-organized an ACM HRI 2022 workshop on Fairness and Transparency in
        HRI
      </>
    ),
  },
  {
    date: "August 2021",
    content: (
      <>
        Gave an invited talk at the 35th International Workshop on New
        Technologies and Work (NeTWork): Safety in the Digital Age
      </>
    ),
  },
  {
    date: "August 2021",
    content: (
      <>
        Excited to receive a{" "}
        <a
          className="news"
          href="https://nsf.gov/awardsearch/showAward?AWD_ID=2125858"
          target="_blank"
        >
          NSF NRT-AI Grant for Ethical Robotics
        </a>
      </>
    ),
  },
  {
    date: "August 2021",
    content: (
      <>
        Gave a keynote at the International Conference on Women Scientists and
        Engineers on Biotechnology, Information Technology, Energy Technology,
        and Nano Technology
      </>
    ),
  },
  {
    date: "August 2021",
    content: (
      <>
        Excited to receive 6-year grants for the{" "}
        <a
          className="news"
          href="https://bridgingbarriers.utexas.edu/good-systems/"
          target="_blank"
        >
          Good Systems Projects on Racially Equitable AI and Misinformation
        </a>
      </>
    ),
  },
  {
    date: "July 2021",
    content: (
      <>
        Excited to receive a{" "}
        <a
          className="news"
          href="https://news.cision.com/se/afa-forsakring/r/ny-forskning-om-hur-algoritmiskt-ledarskap-paverkar-arbetsmiljon-i-logistik--och-transportbranschen,c3398917"
          target="_blank"
        >
          Swedish AFA Insurance grant on Algorithmic Management and Worker
          Health
        </a>{" "}
        with Karolinska Institutet
      </>
    ),
  },
  {
    date: "June 2021",
    content: (
      <>
        Humbled to serve as a{" "}
        <a className="news" href="https://facctconference.org" target="_blank">
          ACM FAccT Conference Diversity and Inclusion Co-Chair
        </a>{" "}
        for two years
      </>
    ),
  },
  {
    date: "June 2021",
    content: <>Gave a talk at the KAIST Graduate School of AI Colloquium</>,
  },
  {
    date: "March 2021",
    content: (
      <>Gave a talk at the Cyprus Center for Algorithmic Transparency (CyCAT)</>
    ),
  },
  {
    date: "Jan 2021",
    content: (
      <>
        A new CHI paper titled{" "}
        <a
          className="news"
          href="materials/Publication/2021-CHI-AIInclusion.pdf"
          target="_blank"
        >
          Who Is Included in Human Perceptions of AI?: Trust and perceived
          fairness around healthcare AI and cultural mistrust
        </a>
      </>
    ),
  },
  {
    date: "November 2020",
    content: (
      <>
        Gave a talk titled "Centering racial equity in AI fairness" at the UT
        Austin Good Systems Panel for AI and the Future of Racial Justice.
      </>
    ),
  },
  {
    date: "October 2020",
    content: (
      <>
        Gave a Data Science seminar talk titled "AI for all: Enabling
        participatory and procedurally-fair AI" at the Seoul National University
      </>
    ),
  },
  {
    date: "September 2020",
    content: (
      <>
        Organizing an{" "}
        <a
          className="news"
          href="https://explainablesystems.comp.nus.edu.sg/2021/"
          target="_blank"
        >
          IUI workshop on XAI for social justice
        </a>
      </>
    ),
  },
  {
    date: "August 2020",
    content: (
      <>
        Serving as an Area Chair for{" "}
        <a
          className="news"
          href="https://facctconference.org/2021/index.html"
          target="_blank"
        >
          ACM FAccT 2021
        </a>
      </>
    ),
  },
  {
    date: "August 2020",
    content: (
      <>
        Received a NSF Smart & Connected Communities (SCC) grant on{" "}
        <a
          className="news"
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1952085"
          target="_blank"
        >
          Empowering Gig Workers Through Building A Community-Centered Gig
          Economy
        </a>
      </>
    ),
  },
  {
    date: "June 2020",
    content: (
      <>
        Gave an invited talk at Assured Autonomy Workshop on responsible
        autonomy
      </>
    ),
  },
  {
    date: "May 2020",
    content: (
      <>
        Received a NSF RAPID grant on{" "}
        <a
          className="news"
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2027426"
          target="_blank"
        >
          Trust in Public Health Information During a Pandemic
        </a>
      </>
    ),
  },
  {
    date: "Mar 2020",
    content: (
      <>
        Gave a AI seminar at UC San Diego on Fair and Participatory AI for all
      </>
    ),
  },
  {
    date: "Jan 2020",
    content: (
      <>
        Received a NSF Fairness in Artificial Intelligence (FAI) grant on{" "}
        <a
          className="news"
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1939606"
          target="_blank"
        >
          Advancing Fairness in AI with Human-Algorithm Collaborations
        </a>
      </>
    ),
  },
  {
    date: "Dec 2019",
    content: (
      <>
        Leading the{" "}
        <a className="news" href="http://fair-ai.owlstown.com" target="_blank">
          CHI2020 workshop on Fair & Responsible AI
        </a>
      </>
    ),
  },
  {
    date: "Dec 2019",
    content: (
      <>
        Received a UT Healthcare Technology, Communication, & Privacy seed grant
      </>
    ),
  },
  {
    date: "July 2019",
    content: (
      <>
        Two papers at{" "}
        <a className="news" href="http://cscw.acm.org/2019/" target="_blank">
          CSCW 2019
        </a>
        : <br />
        <a
          className="news"
          href="materials/Publication/2019-CSCW-AI_Participation.pdf"
          target="_blank"
        >
          WeBuildAI: Participatory Framework for Algorithmic Governance
        </a>{" "}
        and{" "}
        <a
          className="news"
          href="materials/Publication/2019-CSCW-Al_ProceduralFairness.pdf"
          target="_blank"
        >
          Procedural Justice in Algorithmic Fairness
        </a>
      </>
    ),
  },
  {
    date: "July 2019",
    content: (
      <>
        Gave a talk titled "Procedural Justice in Algorithmic Fairness:
        Transparency, Control and Participation Perspectives" at{" "}
        <a
          className="news"
          href="https://simons.berkeley.edu/workshops/fairness-workshop-2"
          target="_blank"
        >
          Simons Institute Workshop on Recent Developments in Research on
          Fairness
        </a>
      </>
    ),
  },
  {
    date: "June 2019",
    content: (
      <>
        WeBuildAi and algorithmic participation received{" "}
        <a
          className="news"
          href="http://www.md4sg.com/workshop/EC19"
          target="_blank"
        >
          Popular Poster Award
        </a>{" "}
        at the{" "}
        <a
          className="news"
          href="http://www.md4sg.com/workshop/EC19"
          target="_blank"
        >
          Mechanism Design for Social Good
        </a>{" "}
        Workshop
      </>
    ),
  },
  {
    date: "June 2019",
    content: (
      <>
        Gave a talk on Algorithmic Management for Empowerment at{" "}
        <a
          className="news"
          href="https://hcic.org/hcic2019/index.phtml"
          target="_blank"
        >
          HCI Consortium 2019 on the Futures of Work
        </a>
      </>
    ),
  },
  {
    date: "June 2019",
    content: (
      <>
        Presented WeBuildAI at{" "}
        <a className="news" href="http://ci.acm.org/2019" target="_blank">
          Collective Intelligence
        </a>
      </>
    ),
  },
  {
    date: "June 2019",
    content: (
      <>
        <a
          className="news"
          href="materials/Publication/2018-Mobisys-Telepresence.pdf"
          target="_blank"
        >
          HomeMeld Telepresence
        </a>{" "}
        received{" "}
        <a
          className="news"
          href="https://www.sigmobile.org/mobisys/2019/demos"
          target="_blank"
        >
          Best Demo Award
        </a>
      </>
    ),
  },
  {
    date: "May 2019",
    content: (
      <>
        Received{" "}
        <a
          className="news"
          href="https://www.cmu.edu/block-center/"
          target="_blank"
        >
          a new grant from Block Center for Technology and Society
        </a>{" "}
        for my project on fair AI and community participation
      </>
    ),
  },
  {
    date: "April 2019",
    content: (
      <>
        Paper on{" "}
        <a
          className="news"
          href="materials/Publication/2019-ICML-StatFoundationDemocracy.pdf"
          target="_blank"
        >
          statistical foundation of virtual democracy
        </a>{" "}
        accepted to{" "}
        <a className="news" href="https://icml.cc" target="_blank">
          ICML 2019
        </a>
      </>
    ),
  },
  {
    date: "February 2019",
    content: (
      <>
        Co-editing{" "}
        <a
          className="news"
          href="https://think.taylorandfrancis.com/unifying-human-computer-interaction-and-artificial-intelligence/?utm_source=CPB_think&utm_medium=cms&utm_campaign=JOB08409"
          target="_blank"
        >
          Special Issue on Unifying HCI and AI for HCI Journal
        </a>
      </>
    ),
  },
  {
    date: "January 2019",
    content: (
      <>
        Giving guest lecture titled Social Considerations for Algorithmic
        Fairness for the Interpretable Machine Learning class
      </>
    ),
  },
  {
    date: "January 2019",
    content: (
      <>
        Giving a talk at{" "}
        <a
          className="news"
          href="https://hci.stanford.edu/courses/cs547/speaker.php?date=2019-01-18"
          target="_blank"
        >
          Stanford Seminar on Computers, People and Design
        </a>
      </>
    ),
  },
  {
    date: "November 2018",
    content: (
      <>
        Giving guest lecture titled Algorithmic Management for the AI for Public
        Policy class
      </>
    ),
  },
  {
    date: "November 2018",
    content: (
      <>
        Co-organizing{" "}
        <a
          className="news"
          href="materials/Publication/2018-CSCW-AlgoParticipation.pdf"
          target="_blank"
        >
          Participation in Algorithmic Ecosystems Workshop
        </a>{" "}
        at{" "}
        <a className="news" href="http://cscw.acm.org/2018/" target="_blank">
          CSCW
        </a>
      </>
    ),
  },
  {
    date: "July 2018",
    content: <>Attending the CSST Decennial Sociotech Futures Symposium</>,
  },
  {
    date: "May 2018",
    content: (
      <>
        Serving as{" "}
        <a className="news" href="http://chi2019.acm.org" target="_blank">
          CHI 2019 Program Committee Associate Chair
        </a>
      </>
    ),
  },
  {
    date: "May 2018",
    content: (
      <>
        Giving guest lecture titled Methods for Studying Human-AI Interaction
        for the Integrated Intelligence in Robotics
      </>
    ),
  },
  {
    date: "April 2018",
    content: (
      <>
        Giving guest lecture titled Design of Future Robotic Services for the
        Programming Usable Interfaces class
      </>
    ),
  },
  {
    date: "January 2018",
    content: (
      <>
        Delighted that our project on a fair algorithm is selected as one of two
        recipients of the{" "}
        <a
          className="news"
          href="https://www.cmu.edu/news/stories/archives/2017/august/uptake.html"
          target="_blank"
        >
          Uptake Machine Learning for Social Good Funding
        </a>
      </>
    ),
  },
  {
    date: "December 2017",
    content: (
      <>
        My{" "}
        <a
          className="news"
          href="http://journals.sagepub.com/doi/full/10.1177/2053951718756684"
          target="_blank"
        >
          paper on perceptions of algorithmic decisions
        </a>{" "}
        accepted to{" "}
        <a
          className="news"
          href="http://journals.sagepub.com/home/bds"
          target="_blank"
        >
          Big Data & Society
        </a>
      </>
    ),
  },
  {
    date: "December 2017",
    content: (
      <>
        Presented at a{" "}
        <a
          className="news"
          href="http://trustworthy-algorithms.org"
          target="_blank"
        >
          NSF Workshop on Trustworthy Algorithmic Decision-Making
        </a>
      </>
    ),
  },
  {
    date: "December 2017",
    content: (
      <>
        Visiting{" "}
        <a
          className="news"
          href="https://www.microsoft.com/en-us/research/lab/microsoft-research-new-york/"
          target="_blank"
        >
          Microsoft Research NYC
        </a>{" "}
        to give a seminar talk
      </>
    ),
  },
  {
    date: "October 2017",
    content: (
      <>
        Became{" "}
        <a className="news" href="https://thri.acm.org" target="_blank">
          editorial board for ACM Transactions of Human-Robot Interaction as
          Associate Editor
        </a>
      </>
    ),
  },
  {
    date: "May 2017",
    content: (
      <>
        Serving as{" "}
        <a className="news" href="https://chi2018.acm.org" target="_blank">
          CHI 2018 Program Committee Associate Chair
        </a>
      </>
    ),
  },
  {
    date: "April 2017",
    content: (
      <>
        Giving guest lecture titled "Designing Fair Algorithmic Services" for
        the Designing Environments for Interaction class
      </>
    ),
  },
  {
    date: "April 2017",
    content: (
      <>
        Invited to{" "}
        <a
          className="news"
          href="https://www.psychoftech.org/2017-speakers/"
          target="_blank"
        >
          speak at Psychology of Technology Conference
        </a>
      </>
    ),
  },
  {
    date: "March 2017",
    content: (
      <>
        Serving as{" "}
        <a
          className="news"
          href="https://chi2017.acm.org/telepresence.html"
          target="_blank"
        >
          CHI 2017 Telepresence Chair
        </a>{" "}
        with{" "}
        <a className="news" href="http://carmster.com" target="_blank">
          Carman Neustaedter
        </a>
      </>
    ),
  },
  {
    date: "Febraury 2017",
    content: (
      <>
        Received{" "}
        <a className="news" href="http://cscw.acm.org/2017/" target="_blank">
          CSCW Best Paper Honorable Mention
        </a>{" "}
        for{" "}
        <a
          className="news"
          href="materials/Publication/2017-CSCW-AlgorithmicMediation_Fairness.pdf"
          target="_blank"
        >
          algorithmic mediation & fair division algorithms
        </a>
      </>
    ),
  },
  {
    date: "December 2016",
    content: (
      <>
        Paper on{" "}
        <a
          className="news"
          href="materials/Publication/2017-CHI-FairAlgoAllocation.pdf"
          target="_blank"
        >
          fair algorithmic services
        </a>{" "}
        accepted to{" "}
        <a className="news" href="https://chi2017.acm.org/" target="_blank">
          CHI 2017
        </a>
      </>
    ),
  },
  {
    date: "November 2016",
    content: (
      <>
        Virtually attended the{" "}
        <a
          className="news"
          href="http://humanrobotinteraction.org/2017/"
          target="_blank"
        >
          HRI 2017 Program Committee meeting
        </a>
      </>
    ),
  },
  {
    date: "September 2016",
    content: (
      <>
        Excited about my new{" "}
        <a
          className="news"
          href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1651566&HistoricalAwards=false"
          target="_blank"
        >
          NSF funding on a smart community service for the homeless population
        </a>
      </>
    ),
  },
  {
    date: "June 2016",
    content: (
      <>
        Presented my work on{" "}
        <a
          className="news"
          href="materials/Publication/2015-CHI_algorithmic_management.pdf"
          target="_blank"
        >
          algorithmic management of Uber/Lyft drivers
        </a>{" "}
        at the{" "}
        <a
          className="news"
          href="https://sase.org/event/2016-berkeley/"
          target="_blank"
        >
          Society for the Advancement of Socio-Economics (SASE) Conference
        </a>
      </>
    ),
  },
  {
    date: "April 2016",
    content: (
      <>
        Gave a seminar at{" "}
        <a
          className="news"
          href="https://www.ischool.berkeley.edu"
          target="_blank"
        >
          UC Berkeley School of Information
        </a>
        , video recorded{" "}
        <a
          className="news"
          href="https://www.youtube.com/watch?v=Y6VXjEotk1c"
          target="_blank"
        >
          here
        </a>
      </>
    ),
  },
  {
    date: "March 2016",
    content: (
      <>
        My fieldwork with{" "}
        <a
          className="news"
          href="materials/Publication/2012-HRI-personalization.pdf"
          target="_blank"
        >
          Snackbot
        </a>{" "}
        featured in{" "}
        <a
          className="news"
          href="https://www.technologyreview.com/s/600996/artificial-intolerance/"
          target="_blank"
        >
          MIT Technology Review
        </a>
      </>
    ),
  },
  {
    date: "January 2016",
    content: (
      <>
        Excited to be on the{" "}
        <a className="news" href="https://chi2016.acm.org" target="_blank">
          CHI
        </a>{" "}
        panel on Algorithmic Authority
      </>
    ),
  },
];
