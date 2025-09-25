export type PublicationYear = {
  year: number;
  papers: {
    title: string;
    authors: string;
    journal: string;
    link: string;
    linkName?: string; // will default to website for now -- todo
    award?: string;
  }[];
};

const publicationYears: PublicationYear[] = [
  {
    year: 2025,
    papers: [
      {
        title:
          "Algorithmic management and occupational safety and health in the logistics sector.",
        authors:
          "Nilsson, K., Håkansta, C., Strauss-Raats, P., Lee, M. K., & Bodin, T.",
        journal:
          "Occupational and Environmental Medicine, 82(Suppl 1), A30-A30.",
        link: "https://oem.bmj.com/content/82/Suppl_1/A30.1",
      },
      {
        title:
          "Algorithmic management and occupational health: A comparative case study of organizational practices in logistics.",
        authors:
          "Nilsson, K. H., Matilla-Santander, N., Lee, M. K., Brulin, E., Bodin, T., & Håkansta, C.",
        journal: "Safety Science, 187, 106863.",
        link: "https://www.sciencedirect.com/science/article/pii/S0925753525000888",
      },
      {
        title:
          "Regulating Algorithmic Management: A Multi-Stakeholder Study of Challenges in Aligning Software and the Law for Workplace Scheduling.",
        authors:
          "Lynn, J., Kim, R. Y., Gao, S., Schneider, D., Pandya, S. S., & Lee, M. K.",
        journal:
          "Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency, 547-572.",
        link: "https://dl.acm.org/doi/pdf/10.1145/3715275.3732037",
      },
      {
        title:
          "Data and Technology for Equitable Public Administration: Understanding City Government Employees' Challenges and Needs.",
        authors:
          "Zhang, A., Liao, M., Taylor, M., Haddad, A., Bhat, C., Watkins, S. C., & Lee, M. K.",
        journal: "arXiv preprint arXiv:2505.21682",
        link: "https://arxiv.org/pdf/2505.21682",
      },
      {
        title:
          "Proxona: Supporting Creators' Sensemaking and Ideation with LLM-Powered Audience Personas.",
        authors: "Choi, Y., Kang, E. J., Choi, S., Lee, M. K., & Kim, J.",
        journal:
          "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 1-32.",
        link: "https://dl.acm.org/doi/pdf/10.1145/3706598.3714034",
      },
      {
        title:
          "Knowledge Workers' Perspectives on AI Training for Responsible AI Use.",
        authors: "Zhang, A. & Lee, M. K.",
        journal:
          "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 1-18.",
        link: "https://dl.acm.org/doi/pdf/10.1145/3706598.3714100",
      },
      {
        title:
          "Emerging Practices in Participatory AI Design in Public Sector Innovation.",
        authors:
          "Saxena, D., Kahn, Z., Moon, E. S., Chambers, L. M., Jackson, C., Lee, M. K., Eslami, M., Guha, S., Erete, S., Irani, L., Mulligan, D., & Zimmerman, J.",
        journal:
          "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems, 1-7.",
        link: "https://arxiv.org/pdf/2502.18689",
      },
      {
        title:
          "Gig2Gether: Datasharing to Empower, Unify and Demystify Gig Work.",
        authors:
          "Hsieh, J., Zhang, A., Surati, S., Xie, S., Ayala, Y., Sathiya, N., Kuo, T., Lee, M. K., & Zhu, H.",
        journal:
          "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 1-25.",
        link: "https://dl.acm.org/doi/pdf/10.1145/3706598.3714398",
      },
      {
        title:
          "GuideLLM: Exploring LLM-Guided Conversation with Applications in Autobiography Interviewing.",
        authors:
          "Duan, J., Zhao, X., Zhang, Z., Ko, E., Boddy, L., Wang, C., Li, T., Rasgon, A., Hong, J., Lee, M. K., Yuan, C., Long, Q., Ding, Y., Chen, T., & Xu, K.",
        journal: "NACCL",
        link: "https://arxiv.org/pdf/2502.06494?",
      },
    ],
  },
  {
    year: 2024,
    papers: [
      {
        title:
          "Supporting Gig Worker Needs and Advancing Policy Through Worker-Centered Data-Sharing.",
        authors:
          "Hsieh, J., Zhang, A., Rasetarinera, M., Chou, E., Ngo, D., Lightman, K., Lee, M. K., & Zhu, H.",
        journal: "arXiv preprint arXiv:2412.02973",
        link: "https://arxiv.org/pdf/2412.02973",
      },
      {
        title:
          "Worker Data Collectives as a means to Improve Accountability, Combat Surveillance and Reduce Inequalities.",
        authors:
          "Hsieh, J., Zhang, A., Kim, S., Rao, V. N., Dalal, S., Mateescu, A., Grohmann, R. D. N., Eslami, M., & Zhu, H.",
        journal:
          "Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing, 697-700.",
        link: "https://arxiv.org/pdf/2409.00737",
      },
      {
        title:
          "The AI-DEC: A card-based design method for user-centered AI explanations.",
        authors: "Lee, C. P., Lee, M. K., & Mutlu, B.",
        journal:
          "Proceedings of the 2023 ACM Conference on Designing Interactive Systems (DIS 2024), 1010-1028.",
        link: "https://dl.acm.org/doi/pdf/10.1145/3643834.3661576",
      },
      {
        title:
          "Aligning data with the goals of an organization and its workers: Designing data labeling for social service case notes.",
        authors:
          "Gondimalla, A., Sreekanth, V., Joshi, G., Nelson, W., Choi, E., Slota, S. C., Greenberg, S. R., Fleischmann, K. R., & Lee, M. K.",
        journal:
          "Proceedings of the CHI Conference on Human Factors in Computing Systems, 1-21.",
        link: "https://dl.acm.org/doi/full/10.1145/3613904.3642014",
      },
      {
        title:
          "Data probes as boundary objects for technology policy design: Demystifying technology for policymakers and aligning stakeholder objectives in rideshare gig work.",
        authors: "Zhang, A., Rana, R., Boltz, A., Dubal, V., & Lee, M. K.",
        journal:
          "Proceedings of the CHI Conference on Human Factors in Computing Systems, 1-21.",
        link: "https://dl.acm.org/doi/pdf/10.1145/3613904.3642000",
      },
      {
        title:
          "An Exploration of LLM-Guided Conversation in Reminiscence Therapy.",
        authors:
          "Duan, J., Zhao, X., Zhang, Z., Ko, E. G., Boddy, L., Wang, C., Li, T., Rasgon, A., Hong, J., Lee, M. K., Yuan, C., Long, Q., Ding, Y., Chen, T., & Xu, K.",
        journal:
          "Neurips Workshop: GenAI for Health: Potential, Trust and Policy Compliance",
        link: "https://openreview.net/forum?id=G6h0ya2d2c",
      },
      {
        title: "Designing LLM-based support for homelessness caseworkers.",
        authors: "Nelson, W., Lee, M. K., Choi, E., & Wang, V.",
        journal:
          "AAAI-2024 Workshop on Public Sector LLMs: Algorithmic and Sociotechnical Design",
        link: "https://pages.ischool.utexas.edu/hai-files/files/publications/80/15_designing_llm_based_support_fo.pdf",
      },
      {
        title:
          "Human-centered NLP fact-checking: Co-designing with fact-checkers using Matchmaking for AI.",
        authors:
          "Liu, H., Das, A., Boltz, A., Zhou, D., Pinaroc, D., Lease, M., & Lee, M. K.",
        journal:
          "Proceedings of the ACM: Human-Computer Interaction (CSCW 2024)",
        link: "https://dl.acm.org/doi/pdf/10.1145/3686962",
      },
    ],
  },
  {
    year: 2023,
    papers: [
      {
        title:
          "Older adults’ trust and distrust in COVID-19 public health information: Qualitative critical incident study.",
        authors:
          "Shiroma, K., Zimmerman, T., Xie, B., Fleischmann, K. R., Rich, K., Lee, M. K., Verma, N., & Jia, C.",
        journal: "JMIR Aging, 6(1), e42517.",
        link: "https://aging.jmir.org/2023/1/e42517/",
      },
      {
        title:
          "Deliberating with AI: Improving Decision-Making for the Future through Participatory AI Design and Stakeholder Deliberation.",
        authors:
          "Zhang, A., Walker, O., Nguyen, K., Dai, J., Chen, A., & Lee, M. K.",
        journal:
          "Proceedings of the ACM: Human-Computer Interaction (CSCW 2023), 1-32.",
        link: "https://dl.acm.org/doi/abs/10.1145/3579601",
      },
      {
        title: "LLMs and the infrastructure of CSCW.",
        authors:
          "Kulkarni, C., Wu, T., Holstein, K., Liao, QV., Lee, M. K., Lee, M., & Subramonyam, H.",
        journal:
          "Companion Publication of the 2023 Conference on Computer Supported Cooperative Work and Social Computing, 408-410.",
        link: "https://pages.ischool.utexas.edu/hai-files/files/publications/78/3584931.3608438.pdf",
      },
      {
        title:
          "Ludification as a Lens for Algorithmic Management: A Case Study of Gig-Workers’ Experiences of Ambiguity in Instacart Work.",
        authors:
          "Ramesh, D., Henning, C., Escher, N., Zhu, H., Lee, M. K., & Banovic, N.",
        journal:
          "Proceedings of ACM Conference on Designing Interactive Systems (DIS 2023), 1-14.",
        link: "https://dramesh14.github.io/pdf/RameshD_dis23_ID_46.pdf",
      },
      {
        title: "Algorithmic Management: The Role of AI in Managing Workforces.",
        authors: "Jarrahi, M. H., Möhlmann, M., & Lee, M. K.",
        journal: "MIT Sloan Management Review, 1-5.",
        link: "https://www.proquest.com/openview/4280e116abfad317a3ac23b638e6adb0/1?pq-origsite=gscholar&cbl=26142",
      },
      {
        title:
          "Creator-Friendly Algorithms: Behaviors, Challenges, and Design Opportunities in Algorithmic Platforms.",
        authors: "Choi, Y., Kang, E. J., Lee, M. K., & Kim, J.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2023), 1-22.",
        link: "https://dl.acm.org/doi/abs/10.1145/3544548.3581386",
      },
      {
        title:
          "Stakeholder-Centered AI Design: Co-Designing Worker Tools with Gig Workers through Data Probes.",
        authors: "Zhang, A., Boltz, A., Lynn, J., Wang, C., & Lee, M. K.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2023), 1-19.",
        link: "https://dl.acm.org/doi/abs/10.1145/3544548.3581354",
      },
      {
        title: "Learning Complementary Policies for Human-AI Teams.",
        authors:
          "Gao, R., Saar-Tsechansky, M., De-Arteaga, M., Han, L., Sun, W., Lee, M. K., & Lease, M.",
        journal: "arXiv, 1-34.",
        link: "https://arxiv.org/abs/2302.02944",
      },
      {
        title:
          "Pedestrian Crash Frequency: Unpacking the Effects of Contributing Factors and Racial Disparities.",
        authors:
          "Haddad, A. J., Mondal, A., Bhat, C., Zhang, A., Liao, M. C., Macias, L. J., Lee, M. K., & Watkins, S. C.",
        journal: "Accident Analysis & Prevention, Volume 182, 1-15.",
        link: "https://www.sciencedirect.com/science/article/pii/S0001457523000015",
      },
      {
        title:
          "IF-City: Intelligible Fair City Planning to Measure, Explain and Mitigate Inequality.",
        authors: "Lyu, Y., Lu, H., Lee, M. K., Schmitt, G., & Lim, B. Y.",
        journal:
          "IEEE Transactions on Visualization and Computer Graphics (TVCG), 1-18.",
        link: "https://ieeexplore.ieee.org/abstract/document/10026242/",
      },
    ],
  },
  {
    year: 2022,
    papers: [
      {
        title:
          "Policy Optimization with Advantage Regularization For Long-Term Fairness in Decision Systems.",
        authors: "Yu, E., Qin, Z., Lee, M. K., & Gao, S.",
        journal:
          "Advances in Neural Information Processing Systems (NeurIPS 2022), 1-14.",
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/file/36b76e1f69bbba80d3463f7d6c02bc3d-Supplemental-Conference.pdf",
      },
      {
        title: "Misinformation and COVID-19 Vaccine Hesitancy.",
        authors:
          "Zimmerman, T., Shiroma, K., Fleischmann, K., Xie, B., Jia, C., Verma, N., & Lee, M. K.",
        journal: "Vaccine, 136-144.",
        link: "https://www.sciencedirect.com/science/article/pii/S0264410X22014025",
      },
      {
        title:
          "Who Has an Interest in “Public Interest Technology”?: Critical Questions for Working with Local Governments & Impacted Communities.",
        authors:
          "Stapleton, L., Saxena, D., Kawakami, A., Nguyen, T., Tonya; Ammitzbøll Flügge, A., Eslami, M., Holten Møller, N., Lee, M. K., Guha, S., Holstein, K.",
        journal:
          "Companion Publication of the 2022 Conference on Computer Supported Cooperative Work and Social Computing (CSCW 2022), 282-286.",
        link: "https://dl.acm.org/doi/abs/10.1145/3500868.3560484",
      },
      {
        title:
          "Understanding Effects of Algorithmic Vs. Community Label on Perceived Accuracy of Hyper-Partisan Misinformation.",
        authors: "Jia, C., Boltz, A., Zhang, A., Chen, A., & Lee, M. K.",
        journal:
          "Proceedings of the ACM: Human-Computer Interaction: Issue CSCW (CSCW 2022), 1-27.",
        link: "https://dl.acm.org/doi/abs/10.1145/3555096",
      },
      {
        title:
          "A Feeling for The Data: How Government and Nonprofit Stakeholders Negotiate Value Conflicts in Data Science Approaches to Ending Homelessness.",
        authors:
          "Slota, S., Fleischmann, K., Lee, M. K., Greenberg, S., Nigam, I., Zimmerman, T., Rodriguez, S., & Snow, J.",
        journal:
          "Journal of the Association for Information Science and Technology (JASIST), 1-15.",
        link: "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/asi.24715",
      },
      {
        title: "Trust in COVID-19 Public Health Information.",
        authors:
          "Verma, N., Fleischmann, K., Zhou, L., Xie, B., Lee, M. K., Rich, K., Shiroma, K., Jia, C., & Zimmerman, T.",
        journal:
          "Journal of the Association for Information Science and Technology (JASIST), 1776-1792.",
        link: "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/asi.24712",
      },
      {
        title:
          "Algorithmic Management Reimagined For Workers and By Workers: Centering Worker Well-Being in Gig Work.",
        authors: "Zhang, A., Boltz, A., Wang, C, & Lee, M. K.",
        journal:
          "Proceedings of 2022 CHI Conference on Human Factors in Computing Systems (CHI 2022), 1-20.",
        award: "Best Paper Honorable Mention",
        link: "https://dl.acm.org/doi/abs/10.1145/3491102.3501866",
      },
      {
        title:
          "Participatory Design of AI Systems: Opportunities and Challenges Across Diverse Users, Relationships, and Application Domains.",
        authors:
          "Zytko, D., Wisniewski, P., Guha, S., Baumer, E. PS., & Lee, M. K.",
        journal:
          "Extended Abstracts of 2022 CHI Conference on Human Factors in Computing Systems (CHI 2022), 1-4.",
        link: "https://dl.acm.org/doi/abs/10.1145/3491101.3516506",
      },
      {
        title: "Fairness and Transparency in Human-Robot Interaction.",
        authors:
          "Claure, H., Chang, M. L., Kim, S., Omeiza, D, Brandāo, M., Lee, M. K., & Jung, M.",
        journal:
          "Extended Abstracts of the 2022 ACM/IEEE International Conference on Human-Robot Interaction (HRI 2022), 1244-1246.",
        link: "https://ieeexplore.ieee.org/abstract/document/9889421",
      },
      {
        title: "Folk Theories and User Strategies on Dating Apps.",
        authors: "Nader, K. & Lee, M. K.",
        journal:
          "In: Smits, M. (eds) Information for a Better World: Shaping the Global future. iConference 2022. Lecture Notes in Computer Science, 13192, 445-458.",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-96957-8_37",
      },
      {
        title:
          "FAQ Chatbot and Inclusive Learning in Massive Open Online Courses.",
        authors: "Han, S. & Lee, M. K.",
        journal: "Computers & Education, Volume 179, 104395, 1-13.",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0360131521002724",
      },
    ],
  },
  {
    year: 2021,
    papers: [
      {
        title:
          "Employment Relationships in Algorithmic Management: A Psychological Contract Perspective.",
        authors: "Lee, M. K.* & Tomprou, M.*",
        journal:
          "Computers in Human Behavior, Article 106997, 1-12. *Equal contribution",
        link: "https://www.sciencedirect.com/science/article/pii/S0747563221003204",
      },
      {
        title: "Human-AI Collaboration with Bandit Feedback",
        authors:
          "Gao, R., Saar-Tsechansky, M., De-Arteaga, M., Han, L., Lee, M. K., & Lease, M.",
        journal:
          "Proceedings of International Joint Conference on Artificial Intelligence (IJCAI 2021), 1-8.",
        link: "https://arxiv.org/abs/2105.10614",
      },
      {
        title: "Algorithmic Management in a Work Context",
        authors:
          "Jarrahi, M. H., Newlands, G., Lee, M. K., Wolf, C., Kinder, E., & Sutherland, W.",
        journal: "Big Data & Society, 1-14.",
        link: "https://journals.sagepub.com/doi/full/10.1177/20539517211020332",
      },
      {
        title:
          "Participatory Algorithmic Management: Elicitation Methods for Worker Well-Being Models",
        authors:
          "Lee, M. K., Nigam, I., Zhang, A., Afriyie, J., Qin, Z., & Gao, S.",
        journal:
          "Proceedings of the AAAI/ACM Conference on Artificial Intelligence, Ethics, and Society (AIES 2021), 715-726.",
        link: "materials/Publication/2021_AIES-WorkerWellBeing.pdf",
      },
      {
        title:
          "Algorithmic Hiring in Practice: Recruiter and HR Professional’s Perspectives on AI Use in Hiring",
        authors: "Li, L., Lassiter, T., Oh, J., & Lee, M. K.",
        journal:
          "Proceedings of the AAAI/ACM Conference on Artificial Intelligence, Ethics, and Society (AIES 2021), 166-176. Oral presentation (9.6%)",
        link: "materials/Publication/2021-AIES-AIHiring.pdf",
      },
      {
        title:
          "Who Is Included in Human Perceptions of AI?: Trust and Perceived Fairness around Healthcare AI and Cultural Mistrust",
        authors: "Lee, M. K. & Rich, K.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2021), Article 138. 14 pages.",
        link: "materials/Publication/2021-CHI-AIInclusion.pdf",
      },
      {
        title: "TExSS: Transparency and Explanations in Smart Systems",
        authors:
          "Smith-Renner, A. M., Loizou, S. K., Dodge, J., Dugan, C., Lee, M. K., Lim, B. Y., Kuflik, T., Sarkar, A., Shulner-Tal, A., & Stumpf, S.",
        journal:
          "Extended Abstracts of the 26th International Conference on Intelligent User Interfaces (IUI 2021)",
        link: "materials/Publication/2021-IUI-TExSS.pdf",
      },
      {
        title:
          "Conducting Quantitative Research with Hard-To-Reach-Online Populations: Using Prime Panels to Rapidly Survey Older Adults During a Pandemic",
        authors:
          "Verma, N., Shiroma, K., Rich, K., Fleischmann, K. R., Xie, B., & Lee, M. K.",
        journal:
          "In Toeppe K., Yan H., Chu S. K. W. (eds) Diversity, Divergence, Dialogue: iConference 2021. Lecture Notes in Computer Science, vol 12646. Springer. (Presentation, 10 pages).",
        link: "materials/Publication/2021-iConference-PrimePanel.pdf",
      },
    ],
  },
  {
    year: 2020,
    papers: [
      {
        title:
          "Introduction to This Special Issue on Unifying Human Computer Interaction and Artificial Intelligence",
        authors: "Choudhury, M. D., Lee, M. K., Zhu, H., & Shamma, D. A.",
        journal: "Human–Computer Interaction, 1-7.",
        link: "materials/Publication/2020-HCI-UnifyingHCI&AI.pdf",
      },
      {
        title: "Human-Centered Approaches to Fair and Responsible AI",
        authors:
          "Lee, M. K., Grgić-Hlača, N., Tschantz, M. C., Binns, R., Weller, A., Carney, M., & Inkpen, K.",
        journal:
          "Extended Abstracts of the 2020 CHI Conference on Human Factors in Computing Systems (CHI 2020), 1-8.",
        link: "materials/Publication/2020-CHIWorkshop_FairResponsibleAI.pdf",
      },
      {
        title:
          "Global Health Crises Are Also Information Crises: A Call to Action",
        authors:
          "Xie, B., He, D., Mercer, T., Wang, Y., Wu, D., Fleischmann, K. R, Zhang, Y., Yoder, L. H., Stephens, K. S., Mackert, M., & Lee, M. K.",
        journal:
          "Journal of the Association for Information Science and Technology (JASIST), 1-5.",
        link: "materials/Publication/2020-JASIST-InfoCrises.pdf",
      },
    ],
  },
  {
    year: 2019,
    papers: [
      {
        title: "WeBuildAI: Participatory Framework for Algorithmic Governance",
        authors:
          "Lee, M. K., Kusbit, D., Kahng, A., Kim, J. T., Yuan, X., Chan, A., Noothigattu, R., See, D., Lee, S., Psomas, C. A., & Procaccia, A.",
        journal:
          "Proceedings of the ACM : Human-Computer Interaction: Volume 3 Issue CSCW, November 2019. Article 181, 35 pages.",
        link: "materials/Publication/2019-CSCW-AI_Participation.pdf",
      },
      {
        title:
          "Procedural Justice in Algorithmic Fairness: Leveraging Transparency and Outcome Control for Fair Algorithmic Mediation",
        authors: "Lee, M. K., Jain, A., Cha, H. J., Ojha, S., & Kusbit, D.",
        journal:
          "Proceedings of the ACM : Human-Computer Interaction: Volume 3 Issue CSCW, November 2019. Article 182, 26 pages.",
        link: "materials/Publication/2019-CSCW-Al_ProceduralFairness.pdf",
      },
      {
        title: "Statistical Foundations of Virtual Democracy",
        authors:
          "Kahng, A., Lee, M. K., Noothigattu, R., Procaccia, A. D., & Psomas, C. A.",
        journal:
          "Proceedings of the International Conference on Machine Learning (ICML 2019), 3173-3182.",
        link: "materials/Publication/2019-ICML-StatFoundationDemocracy.pdf",
      },
      {
        title:
          "User Attitudes Towards Algorithmic Opacity and Transparency in Online Reviewing Platforms",
        authors:
          "Eslami, M., Vaccaro, K., Lee, M. K., Elazari, A., Gilbert, E., & Kahalios, K.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2019) Paper No. 494.",
        link: "materials/Publication/2019-CHI-AlgoOpacity.pdf",
      },
      {
        title:
          "Towards Peripheral Awareness of Remote Family Member's Context Using Self-mobile Robotic Avatars (Demo)",
        authors:
          "Kang, B., Hwang, I., Lee, J., Lee, S., Lee, T., Chang, Y., & Lee, M. K.",
        journal:
          "Proceedings of the 17th Annual International Conference on Mobile Systems, Applications, and Services (MobiSys), 677-678.",
        award: "Best Demo Award",
        link: "materials/Publication/2019-Mobisys-TeleDemo2.pdf",
      },
    ],
  },
  {
    year: 2018,
    papers: [
      {
        title:
          "Understanding Perception of Algorithmic Decisions: Fairness, Trust and Emotion in Response to Algorithmic Management",
        authors: "Lee, M. K.",
        journal: "Big Data & Society (5)1.",
        link: "http://journals.sagepub.com/doi/full/10.1177/2053951718756684",
      },
      {
        title:
          "The Changing Contours of Participation in Data-driven, Algorithmic Ecosystems: Challenges, Tactics, and an Agenda",
        authors:
          "Wolf, C. T., Zhu, H., Bullard, J., Lee, M. K., and Brubaker, J. R.",
        journal:
          "Companion of the 2018 ACM Conference on Computer Supported Cooperative Work and Social Computing (CSCW), 377-384.",
        link: "materials/Publication/2018-CSCW-AlgoParticipation.pdf",
      },
      {
        title:
          "My Being to Your Place, Your Being to My Place: Co-Present Robotic Avatars Create Illusion of Living Together",
        authors:
          "Kang, B., Hwang, I., Lee, J., Lee, S., Lee, T., Chang, Y., and Lee, M. K.",
        journal:
          "Proceedings of the 16th Annual International Conference on Mobile Systems, Applications, and Services (ACM MobiSys 2018), 54-67.",
        link: "materials/Publication/2018-Mobisys-Telepresence.pdf",
      },
      {
        title:
          "HomeMeld: Co-Present Robotic Avatar System for Illusion of Living Together (Demo)",
        authors:
          "Kang, B., Hwang, I., Lee, J., Lee, S., Lee, T., Chang, Y., and Lee, M. K.",
        journal:
          "Proceedings of the 16th Annual International Conference on Mobile Systems, Applications, and Services (ACM MobiSys 2018), 545-545.",
        link: "materials/Publication/2018-Mobisys-TeleDemo.pdf",
      },
    ],
  },
  {
    year: 2017,
    papers: [
      {
        title:
          "Towards a Socially Responsible Smart City: Dynamic Resource Allocation for Smarter Community Service",
        authors: "Tsai, H., Shoukry, Y., Lee, M. K., and Raman, V.",
        journal:
          "Proceedings of the 4th ACM International Conference on Systems for Energy-Efficient Built Environments (ACM BuildSys 2017)",
        link: "materials/Publication/2017-Buildsys-SmartCity.pdf",
      },
      {
        title:
          "A Human-Centered Approach to Algorithmic Services: Considerations for Fair and Motivating Smart Community Service Management That Allocates Donations to Non-Profit Organizations",
        authors: "Lee, M. K., Kim, J. and Lizarondo, L.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2017), 3365-3376.",
        link: "materials/Publication/2017-CHI-FairAlgoAllocation.pdf",
      },
      {
        title:
          "Algorithmic Mediation in Group Decisions: Fairness Perceptions of Algorithmically Mediated vs. Discussion-Based Social Division",
        authors: "Lee, M. K. and Baykal, S.",
        journal:
          "Proceedings of the ACM Conference on Computer-Supported Cooperative Work & Social Computing (CSCW 2017), 1035-1048.",
        award: "Best Paper Honorable Mention",
        link: "materials/Publication/2017-CSCW-AlgorithmicMediation_Fairness.pdf",
      },
      {
        title:
          "Algorithmic Bosses, Robotic Colleagues: Toward Human-Centered Algorithmic Workplaces",
        authors: "Lee, M. K.",
        journal:
          "XRDS: Crossroads, The ACM Magazine for Students - The Future of Work, 23(2), 42-47.",
        link: "materials/Publication/2017-XRDS_AlgoWork_essay.pdf",
      },
    ],
  },
  {
    year: 2016,
    papers: [
      {
        title:
          "Algorithmic Authority: The Ethics, Politics, and Economics of Algorithms that Interpret, Decide, and Manage",
        authors:
          "Lustig, C., Pine, K., Nardi, B., Irani, L., Lee, M. K., Nafus, D., & Sandvig, C.",
        journal:
          "Proceedings of the ACM/SIGCHI CHI Conference Extended Abstracts on Human Factors in Computing Systems, 1057-1062",
        link: "materials/Publication/2016-CHI-algorithm_panel.pdf",
      },
      {
        title:
          "Algorithms at Work: Empirical Diversity, Analytic Vocabularies, Design Implications",
        authors:
          "Wagenknecht, S., Lee, M.K, Lustig, C., O'Neill, J., & Zade, H.",
        journal:
          "Proceedings of the 19th ACM Conference on Computer Supported Cooperative Work and Social Computing Companion, 536-543",
        link: "materials/Publication/2016-CSCW-algorithm_workshop.pdf",
      },
    ],
  },
  {
    year: 2015,
    papers: [
      {
        title:
          "Personalization Revisited: A Reflective Approach Helps People Better Personalize Health Services and Motivates Them to Increase Physical Activity",
        authors: "Lee, M. K., Kim, J., Forlizzi, J. and Kiesler, S.",
        journal:
          "Proceedings of the ACM International Joint Conference on Pervasive and Ubiquitous Computing (Ubicomp 2015), 743-754",
        link: "materials/Publication/2015-Ubicomp-personalization_revisited.pdf",
      },
      {
        title:
          "Working with Machines: The Impact of Algorithmic, Data-Driven Management on Human Workers",
        authors: "Lee, M. K., Kusbit, D., Metsky, E. and Dabbish, L.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2015), 1603-1612",
        link: "materials/Publication/2015-CHI_algorithmic_management.pdf",
      },
      {
        title:
          "Making Decisions From a Distance: The Impact of Technological Mediation on Riskiness and Dehumanization",
        authors: "Lee, M. K., Fruchter, N., and Dabbish, L.",
        journal:
          "Proceedings of the ACM Conference on Computer Supported Cooperative Work and Social Computing (CSCW 2015), 1576-1589",
        link: "materials/Publication/2015-CSCW-teledecision.pdf",
      },
      {
        title:
          "Shop-i: Gaze-Based Interaction in the Physical World for In-Store Social Shopping Experience",
        authors: "Kim, M., Lee, M. K., & Dabbish, L.",
        journal:
          "Proceedings of the 33rd Annual ACM Conference Extended Abstracts on Human Factors in Computing Systems (CHI EA 2015), 1253-1258",
        link: "materials/Publication/2015-CHIEA-ShopI.pdf",
        award: "[VIDEO] https://vimeo.com/118772055",
      },
    ],
  },
  {
    year: 2013,
    papers: [
      {
        title: "Designing Personalization in Technology-Based Services",
        authors: "Lee, M. K.",
        journal: "Doctoral dissertation",
        link: "http://reports-archive.adm.cs.cmu.edu/anon/anon/usr/ftp/hcii/CMU-HCII-13-102.pdf",
      },
      {
        title: "Toward Seamless Human-Robot Handovers",
        authors:
          "Strabala, K., Lee, M. K., Dragan, A., Forlizzi, J., Srinivasa, S, Cakmak, M., and Micelli, V.",
        journal: "Journal of Human-Robot Interaction, 112-132",
        link: "materials/Publication/2013-JHRI-handover.pdf",
      },
    ],
  },
  {
    year: 2012,
    papers: [
      {
        title:
          "Ripple Effects of Embedded Social Agents: Field Study of a Social Robot in the Workplace",
        authors: "Lee, M. K., Kiesler, S., Forlizzi, J., and Rybski, P.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2012), 695-704. 23% acceptance rate",
        link: "materials/Publication/2012-CHI-social_agent_in_social_setting.pdf",
      },
      {
        title: "Personalization in HRI: A Longitudinal Field Experiment",
        authors:
          "Lee, M. K., Forlizzi, J., Kiesler, S., Rybski, P., Antanitis, J., and Savetsila, S.",
        journal:
          "Proceedings of the ACM/IEEE International Conference on Human Robot Interaction (HRI 2012), 319-326. 25% acceptance rate",
        link: "materials/Publication/2012-HRI-personalization.pdf",
      },
      {
        title: "A Fieldwork of the Future with User Enactments",
        authors:
          "Odom, W., Zimmerman, J., Davidoff, S., Forlizzi, J., Dey, A. K., and Lee, M. K.",
        journal:
          "Proceedings of the ACM Conference on Designing Interactive Systems (DIS 2012), 338-347. 26% acceptance rate",
        link: "materials/Publication/2012-DIS-user_enactments.pdf",
        award: "Best Paper Award",
      },
      {
        title:
          "Learning the Communication of Intent Prior to Physical Collaboration",
        authors:
          "Strabala, K., Lee, M. K., Dragan, A., Forlizzi, J., and Srinivasa, S",
        journal:
          "Proceedings of the IEEE Symposium on Robot and Human Interactive Communication (RO-MAN 2012), 968-973",
        link: "materials/Publication/2012-ROMAN-predicting_intent.pdf",
      },
    ],
  },
  {
    year: 2011,
    papers: [
      {
        title:
          "“Now, I Have a Body”: Uses and Social Norms for Mobile Remote Presence in the Workplace",
        authors: "Lee, M.K. and Takayama, L.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2011), 33-42. 26% acceptance rate.",
        award: "Best Paper Honorable Mention",
        link: "materials/Publication/2011-CHI-telepresence.pdf",
      },
      {
        title:
          "Mining Behavioral Economics to Design Persuasive Technology for Healthy Choices",
        authors: "Lee, M.K., Kiesler, S., and Forlizzi, J.",
        journal:
          "Proceedings of the ACM/SIGCHI Conference on Human Factors in Computing Systems (CHI 2011), 325-334. 26% acceptance rate.",
        link: "materials/Publication/2011-CHI-behavioral_econ.pdf",
      },
      {
        title:
          "Using Spatial and Temporal Contrast for Fluent Robot-Human Hand-Overs",
        authors:
          "Cakmak, M., Srinivasa, S., Lee, M.K., Kiesler, S., and Forlizzi. J.",
        journal:
          "Proceedings of the ACM/IEEE International Conference on Human Robot Interaction (HRI 2011), 489-496. 22% acceptance rate.",
        link: "materials/Publication/2011-HRI-handover.pdf",
      },
      {
        title: "Human Preferences in Robot-Human Hand-Over Configurations",
        authors:
          "Cakmak, M., Srinivasa, S., Lee, M.K., Forlizzi. J., and Kiesler, S.",
        journal:
          "Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2011), 1986-1993. 32% acceptance rate.",
        link: "materials/Publication/2011-IROS-handover.pdf",
      },
      {
        title: "Believable Robot Characters",
        authors:
          "Simmons, R., Makatchev, M., Kirby, R., Lee, M. K., Fanaswala, I., Browning, B., Forlizzi, J., and Sakr, M.",
        journal: "AAAI AI Magazine, 32, 4, 39-52.",
        link: "materials/Publication/2011-BelievableRobotCharacters.pdf",
      },
      {
        title:
          "Understanding Users’ Perception of Privacy in Human-Robot Interaction",
        authors: "Lee, M.K., Tang, K. P., Forlizzi, J., and Kiesler, S.",
        journal:
          "Late-breaking Reports of Human-Robot Interaction (HRI 2011), 181-182.",
        link: "materials/Publication/2011-HRI-robot privacy.pdf",
      },
      {
        title:
          "Predictability or Adaptivity? Designing Robot Handoffs Modeled from Trained Dogs and People",
        authors:
          "Lee, M.K., Forlizz, J., Kiesler, S., Cakmak, M., and Srinivasa, S.",
        journal:
          "Late-breaking Reports of Human-Robot Interaction (HRI 2011), 179-180.",
        link: "materials/Publication/2011-HRI-handoff.pdf",
      },
    ],
  },
  {
    year: 2010,
    papers: [
      {
        title: "Gracefully Mitigating Breakdowns in Robotic Services",
        authors:
          "Lee, M.K., Kiesler, S., Forlizzi, J., Srinivasa, S., and Rybski, P.",
        journal:
          "Proceedings of the ACM/IEEE International Conference on Human Robot Interaction (HRI 2010), 203-210. 21% acceptance rate.",
        award: "Best Paper Award",
        link: "materials/Publication/2010-HRI-mitigating_breakdown.pdf",
      },
      {
        title:
          "Receptionist or Information Kiosk? How Do People Talk with a Robot?",
        authors: "Lee, M.K., Kiesler, S., and Forlizzi, J.",
        journal:
          "Proceedings of the ACM Conference on Computer Supported Cooperative Work (CSCW 2010), 31-40. 20% acceptance rate.",
        link: "materials/Publication/2010-CSCW-receptionist.pdf",
      },
      {
        title: "Dona: Urban Donation Motivating Robot",
        authors:
          "Kim, M.S., Cha, B.K., Park, D.M., Lee, S.M., Kwak, S., and Lee, M.K.",
        journal:
          "Late-breaking Reports and Video Session of Human-Robot Interaction (HRI 2010), 159-160.",
        award: "Best Video Honorable Mention",
        link: "materials/Publication/2010-HRI-dona.pdf",
      },
    ],
  },
  {
    year: 2009,
    papers: [
      {
        title:
          "The Snackbot: Documenting the Design of a Robot for Long-Term Human-Robot Interaction",
        authors:
          "Lee, M.K., Forlizzi, J., Rybski, P.E., Crabbe, F., Chung, W., Finkle, J., Glaser, E., and Kiesler, S.",
        journal:
          "Proceedings of the ACM/IEEE International Conference on Human Robot Interaction (HRI 2009), 7-14. 19% acceptance rate.",
        link: "materials/Publication/2009-HRI-robot_design_process.pdf",
      },
      {
        title: "Designing Adaptive Robotic Services",
        authors: "Lee, M.K., and Forlizzi, J.",
        journal:
          "Proceedings of the International Association of Societies of Design Research (IASDR’09).",
        link: "materials/Publication/2009-IASDR-adaptive_robot_service.pdf",
      },
      {
        title:
          "Tailoring Websites to Increase Contributions to Online Communities",
        authors:
          "Lee, M.K., Dillahunt, T., Pendleton, B., Kraut, R., and Kiesler, S.",
        journal:
          "Extended Abstracts of Human Factors in Computing Systems (CHI EA 2009), 4003-4008.",
        link: "materials/Publication/2009-EACHI-web_tailoring_for_contribution.pdf",
      },
      {
        title:
          "How Do People Talk with a Robot: An Analysis of Human-Robot Dialogues in the Real World",
        authors: "Lee, M.K. and Makachev, M.",
        journal:
          "Extended Abstracts of Human Factors in Computing Systems (CHI EA 2009), 3769-3774.",
        link: "materials/Publication/2009-EACHI-how_people_talk_with robot.pdf",
      },
      {
        title: "Relating Initial Turns of Human-Robot Dialogues to Discourse",
        authors: "Makachev, M., Lee, M.K., and Simmons, R.",
        journal:
          "Late-breaking Reports of Human-Robot Interaction (HRI 2009), 321-322.",
        link: "materials/Publication/2009-HRI-relating_initial_turns.pdf",
      },
    ],
  },
  {
    year: 2008,
    papers: [
      {
        title: "Designing for Control: Finding Roles for Smart Homes",
        authors: "Lee, M.K., Davidoff, S., Zimmerman, J., and Dey, A.K.",
        journal:
          "In P. Desmet, J. van Erp, and M. Karlsson (eds.), Design & Emotion Moves (pp. 246-266). UK:Cambridge Scholars Publishing.",
        link: "materials/Publication/2008-DnE-BookChapter-control.pdf",
      },
    ],
  },
  {
    year: 2007,
    papers: [
      {
        title: "Rapidly Exploring Application Design through Speed Dating",
        authors: "Davidoff, S., Lee, M.K., Dey, A.K., and Zimmerman, J.",
        journal:
          "Proceedings of the International Conference on Ubiquitous Computing (Ubicomp 2007), 429-446. 19% acceptance rate.",
        link: "materials/Publication/2007-Ubicomp-speed_dating.pdf",
      },
      {
        title: "Smart Bag: Managing Home and Raising Children",
        authors: "Lee, M.K., Davidoff, S., Zimmerman, J., and Dey, A.K.",
        journal:
          "Proceedings of the International Conference on Designing Pleasurable Products and Interfaces (DPPI 2007), 434 - 437.",
        link: "materials/Publication/2007-DPPI-smart_bag.pdf",
      },
    ],
  },
  {
    year: 2006,
    papers: [
      {
        title: "Smart Homes, Families and Control",
        authors: "Lee, M.K., Davidoff, S., Zimmerman, J., and Dey, A.K.",
        journal:
          "Proceedings of the International Conference on Design & Emotion (D&E 2006).",
        award: "Best Paper Award",
        link: "materials/Publication/2006-DnE-smart_homes.pdf",
      },
      {
        title: "Principles of Smart Home Control",
        authors:
          "Davidoff, S., Lee, M.K., Yiu, C., Zimmerman, J., and Dey, A.K.",
        journal:
          "Proceedings of the International Conference on Ubiquitous Computing (Ubicomp 2006), 19-34. 13% acceptance rate.",
        link: "materials/Publication/2006-Ubicomp-principles_of_smart home.pdf",
      },
      {
        title: "Socially-Aware Requirements for a Smart Home for Families",
        authors: "Davidoff, S., Lee, M.K., Zimmerman, J., and Dey, A.K.",
        journal:
          "Proceedings of the International Symposium on Intelligent Environments, 45-48.",
        link: "",
      },
    ],
  },
];

export default publicationYears;
