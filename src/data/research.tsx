export type Paper = {
  title: string;
  url: string;
};

export type SubProject = {
  title: string;
  description: string;
  papers?: Paper[];
};

export type Project = {
  image: string;
  title: string;
  description: string;
  subProjects?: SubProject[];
};

export type PastProject = {
  image: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    image: "img/work.png",
    title: "Psychological Understandings of AI",
    description:
      "We seek to gain novel understandings of human perception and trust, human decision-makers’ biases, and social practices around AI and algorithmic decisions.",
    subProjects: [
      {
        title: "Human Perspectives on AI Fairness & Equity",
        description:
          "Human perceptions of fairness in algorithmic decisions for resource allocation, healthcare, and managerial decisions such as AI-based hiring.",
        papers: [
          {
            title: "Perceptions of Algorithmic Decisions",
            url: "materials/Publication/2018-AlgoManagePerception.pdf",
          },
          {
            title: "Procedural Justice Framework for AI",
            url: "materials/Publication/2019-CSCW-Al_ProceduralFairness.pdf",
          },
          {
            title: "Algorithmic Mediation & Fair Division Algorithm",
            url: "materials/Publication/2017-CSCW-AlgorithmicMediation_Fairness.pdf",
          },
        ],
      },
      {
        title: "Work Practices around AI",
        description:
          "Perceptions and work practices around algorithmic management in gig work, human resource management, and physician-patient relationships.",
        papers: [
          {
            title: "Working with Machines",
            url: "materials/Publication/2015-CHI_algorithmic_management.pdf",
          },
          {
            title: "Perceptions of Algorithmic Decisions",
            url: "materials/Publication/2018-AlgoManagePerception.pdf",
          },
        ],
      },
    ],
  },
  {
    image: "img/webuildai2.png",
    title: "Participatory Systems for Human-Centered AI",
    description:
      "We develop participatory methods and systems to empower workers and citizens to design AI systems for well-being, fairness and equity.",
    subProjects: [
      {
        title: "WeBuildAI",
        description:
          "WeBuildAI framework that enables stakeholders to build algorithmic models for their own communities, such as a donation matching algorithm that adjudicates tradeoffs between equity and efficiency.",
        papers: [
          {
            title: "WeBuildAI",
            url: "materials/Publication/2019-CSCW-AI_Participation.pdf",
          },
        ],
      },
      {
        title: "Participatory AI Governance & Management",
        description:
          "Ongoing work on algorithmic shift scheduling, AI-assisted hiring, gig work, and public resource allocation in city food infrastructure.",
        papers: [
          {
            title: "Worker Well-Being Model for Algorithmic Management",
            url: "materials/Publication/2021-ParticipatoryWorkerWell-Being.pdf",
          },
        ],
      },
    ],
  },
  {
    image: "img/xai.png",
    title: "Data Science and AI Explainability",
    description:
      "We explore data science and AI explainability to design decision-support tools for enhanced human decision-making.",
    subProjects: [
      {
        title: "Decision-Support Tool",
        description:
          "Ongoing work on public assistance for people experiencing homelessness, AI-assisted hiring, and strategies to tackle misinformation on social media.",
        papers: [
          {
            title: "Procedural Justice Framework for AI",
            url: "materials/Publication/2019-CSCW-Al_ProceduralFairness.pdf",
          },
          {
            title: "Dynamic Resource Allocation for Community Service",
            url: "materials/Publication/2017-Buildsys-SmartCity.pdf",
          },
          {
            title: "Fair Smart Community Service",
            url: "materials/Publication/2017-CHI-FairAlgoAllocation.pdf",
          },
        ],
      },
    ],
  },
];

export const pastProjects: PastProject[] = [
  {
    image: "img/hri.jpg",
    title: "Human-Robot Interaction",
    description:
      "How can we design robots that people enjoy living and working with?",
  },
  {
    image: "img/telepresence.png",
    title: "Telepresence & Mediated Decision-Making",
    description:
      "How can telepresence improve the ways people collaborate and make decisions?",
  },
  {
    image: "img/design.png",
    title: "Design Method & Research",
    description:
      "What design methods can help designers explore future technologies?",
  },
];
