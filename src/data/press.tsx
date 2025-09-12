import type { ReactNode } from "react";

export type PressArticle = {
  name: string;
  url: string;
  publication: string;
  date: string;
};

export type PressCategory = {
  name: string;
  articles: (PressArticle | ReactNode)[];
};

const press: PressCategory[] = [
  {
    name: "Algorithms & Robots in the Workplace",
    articles: [
      {
        name: "How Uber drivers feel about being managed by machines",
        url: "https://www.forbes.com/sites/adigaskell/2018/05/08/how-do-uber-drivers-feel-about-being-managed-by-machines/#4e74eef16754",
        publication: "Forbes",
        date: "May 2018",
      },
      {
        name: "Artificial intolerance",
        url: "https://www.technologyreview.com/s/600996/artificial-intolerance/",
        publication: "MIT Technology Review",
        date: "March 2016",
      },
      {
        name: "On-demand workers unite online to fight Uber and the gig economy",
        url: "https://www.newscientist.com/article/mg22830512-400-on-demand-workers-unite-online-to-fight-uber-and-the-gig-economy/",
        publication: "New Scientist",
        date: "December 2015",
      },
      {
        name: "When your boss is an Uber algorithm",
        url: "https://www.technologyreview.com/s/543946/when-your-boss-is-an-uber-algorithm/",
        publication: "MIT Technology Review",
        date: "December 2015",
      },
      {
        name: "Detest Uber’s surge pricing? Some drivers don’t like it either",
        url: "https://www.cnet.com/news/detest-ubers-surge-pricing-some-drivers-dont-like-it-either/",
        publication: "CNET",
        date: "August 2015",
      },
      {
        name: "How Uber surge pricing really works",
        url: "https://www.washingtonpost.com/news/wonk/wp/2015/04/17/how-uber-surge-pricing-really-works/?noredirect=on&utm_term=.1eb78103db1c",
        publication: "The Washington Post",
        date: "April 2015",
      },
      {
        name: "When your boss wears metal pants",
        url: "https://hbr.org/2015/06/when-your-boss-wears-metal-pants",
        publication: "Harvard Business Review",
        date: "June 2015",
      },
      {
        name: "How robots will work with us isn’t only a technological question",
        url: "https://hbr.org/2014/03/how-robots-will-work-with-us-isnt-only-a-technological-question",
        publication: "Harvard Business Review",
        date: "March 2014",
      },
      {
        name: "Why it’s bad to be a robot on the phone",
        url: "https://www.theatlantic.com/technology/archive/2014/11/why-its-bad-to-be-a-robot-on-the-phone/382212/",
        publication: "The Atlantic",
        date: "November 2014",
      },
      {
        name: "Polite robot overlords will be more persuasive",
        url: "https://spectrum.ieee.org/robotics/artificial-intelligence/polite-robot-overlords-will-be-more-persuasive",
        publication: "IEEE Spectrum",
        date: "March 2013",
      },
      {
        name: "How a robot can replace you at work - and how it can’t",
        url: "https://www.newscientist.com/article/mg20928055-000-how-a-robot-can-replace-you-at-work-and-how-it-cant/",
        publication: "New Scientist",
        date: "March 2011",
      },
      {
        name: "Just like Mombot used to make",
        url: "https://www.nytimes.com/2010/02/24/dining/24robots.html?scp=2&sq=snackbot&st=cse",
        publication: "New York Times",
        date: "February 2010",
      },
      {
        name: "Snackbot: Polite host, research platform, vending machine",
        url: "https://www.cnet.com/news/snackbot-polite-host-research-platform-vending-machine/",
        publication: "CNET",
        date: "October 2009",
      },
      {
        name: "The new Pittsburgh",
        url: "https://www.cbsnews.com/video/the-new-pittsburgh/",
        publication: "CBS National News (Television)",
        date: "September 2009",
      },
    ],
  },
  {
    name: "Smart Bag",
    articles: [
      <>
        Designing interactive systems: People, activities, contexts,
        technologies (Book), 2009. David Benyon, Phil Turner, and Susan Turner.
        Addison Wesley.
      </>,

      <>
        Mobile technology for children: Designing for interaction and learning
        (Book), 2009. Allison Drulin. Morgan Kaufmann.
      </>,

      <>“The Kindness Lab” in Spirit Magazine, 2008.</>,
    ],
  },
  {
    name: "Speed Dating Method",
    articles: [
      <>
        {" "}
        Universal methods of design: 100 ways to research complex problems,
        develop innovative ideas, and design effective solutions (Book), 2012.
        Bruce Hanington, Bella Martin. Rockport Publishers.
      </>,
    ],
  },
];

export default press;
