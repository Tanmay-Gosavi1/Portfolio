import { GiGraduateCap } from "react-icons/gi";
import { LuSparkles } from "react-icons/lu";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FiAward, FiCode, FiDatabase } from "react-icons/fi";

const About = () => {
  const education = [
    {
      institute: "Indian Institute of Information Technology, Vadodara",
      detail: "B.Tech in Information Technology",
      duration: "2024 - 2028",
      score: "CGPA: 8.40",
    },
    {
      institute: "Khushaldada Madhyamik & Uccha Madhyamik Aashram School",
      detail: "Maharashtra Board of Secondary and Higher Secondary Education",
      duration: "2022 - 2024",
      score: "Percentage: 85.33%",
    },
  ];

  const experiencePoints = [
    "Optimized PostgreSQL queries for stories, streaks, and engagement data in social APIs.",
    "Built Node.js backend logic for reciprocal streak tracking and view analytics.",
    "Integrated Gemini API into story upload flow for contextual AI-based aura scoring.",
    "Implemented activity-based achievement and reward tracking for Endless Achievements.",
  ];

  const projectHighlights = [
    "Full-stack AI learning platform with document upload, flashcards, quizzes, and summaries.",
    "Context-restricted RAG chatbot with grounded answers and fallback explanations.",
    "Interactive analytics dashboard for streaks, revision activity, and quiz performance.",
    "JWT auth, Multer uploads, and caching/chunking strategy to reduce API cost.",
  ];

  const skillBuckets = [
    {
      title: "Frontend",
      icon: FiCode,
      stack: ["React", "Tailwind CSS", "Redux Toolkit", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: FiDatabase,
      stack: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "JWT"],
    },
    {
      title: "AI + Tools",
      icon: LuSparkles,
      stack: ["Gemini API", "Machine Learning (Basic)", "Git", "GitHub", "Postman"],
    },
  ];

  const achievements = [
    "Top 5 Finalist in HackIITV for building HustleBOT, a Generative AI business platform.",
    "Secured 1400+ rating on CodeChef with strong DSA problem solving.",
    "Solved 500+ problems across LeetCode and GeeksForGeeks.",
    "Received Letter of Recommendation for backend contributions at Aurameter.",
  ];

  return (
    <section
      id='about'
      className='relative w-full py-14 sm:py-18 md:py-20 px-4 sm:px-7 md:px-10 lg:px-12 overflow-hidden'
    >
      <div className='absolute inset-0 -z-10'>
        <div className='h-full w-full bg-[radial-gradient(circle_at_14%_20%,rgba(254,214,143,0.35),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(124,205,255,0.28),transparent_30%),linear-gradient(160deg,#fff8ef_0%,#f8fafc_58%,#fefefe_100%)] dark:bg-[radial-gradient(circle_at_14%_20%,rgba(137,92,27,0.26),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(59,130,246,0.2),transparent_30%),linear-gradient(160deg,#0a0a0a_0%,#000000_65%,#050505_100%)]'></div>
        <div className='absolute inset-0 opacity-30 dark:opacity-20 [background-image:linear-gradient(to_right,#a1a1aa18_1px,transparent_1px),linear-gradient(to_bottom,#a1a1aa18_1px,transparent_1px)] [background-size:26px_26px]'></div>
      </div>

      <div className='mx-auto w-full max-w-6xl'>
        <div className='text-center mb-8 sm:mb-10 md:mb-12'>
          <p className='inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 px-4 py-1.5 text-xs sm:text-sm tracking-[0.18em] uppercase text-[#54545f] dark:text-gray-300 bg-white/70 dark:bg-white/5 backdrop-blur'>
            <HiOutlineRocketLaunch size={16} />
            About Me
          </p>
          <h2 className='mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight'>
            Building products where performance meets personality.
          </h2>
          <p className='mt-4 max-w-3xl mx-auto text-base sm:text-lg text-[#4d4e54] dark:text-gray-300'>
            I am Tanmay Gosavi, a MERN , NextJs and PostgreSQL focused developer who enjoys creating thoughtful interfaces and reliable backend systems, then elevating both with practical AI features.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6'>
          <article className='lg:col-span-3 rounded-3xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur p-5 sm:p-6 shadow-xl/10'>
            <div className='flex items-center gap-3 mb-4'>
              <GiGraduateCap size={25} className='text-[#1f2937] dark:text-white' />
              <h3 className='text-2xl sm:text-3xl font-semibold text-black dark:text-white'>Learning Track</h3>
            </div>
            <div className='space-y-3'>
              {education.map((item) => (
                <div key={item.institute} className='rounded-2xl border border-black/10 dark:border-white/15 p-4 sm:p-5 bg-white/70 dark:bg-black/30'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5'>
                    <h4 className='text-base sm:text-lg font-semibold text-black dark:text-white'>{item.institute}</h4>
                    <span className='text-sm text-[#595a61] dark:text-gray-300'>{item.duration}</span>
                  </div>
                  <p className='text-sm sm:text-base text-[#4d4e54] dark:text-gray-300 mt-1'>{item.detail}</p>
                  <p className='text-sm font-medium mt-1 text-[#1f2937] dark:text-gray-200'>{item.score}</p>
                </div>
              ))}
            </div>
          </article>

          <article className='lg:col-span-2 rounded-3xl border border-black/10 dark:border-white/20 bg-gradient-to-br from-black to-[#1c1c1f] dark:from-[#0f0f0f] dark:to-[#1b1b1e] p-5 sm:p-6 text-white shadow-xl/30'>
            <div className='flex items-center gap-2 mb-4'>
              <LuSparkles size={20} />
              <h3 className='text-2xl font-semibold'>Quick Snapshot</h3>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='rounded-2xl bg-white/10 p-4'>
                <p className='text-3xl font-bold'>3+</p>
                <p className='text-sm text-gray-200'>Years Building</p>
              </div>
              <div className='rounded-2xl bg-white/10 p-4'>
                <p className='text-3xl font-bold'>10+</p>
                <p className='text-sm text-gray-200'>Projects</p>
              </div>
              <div className='rounded-2xl bg-white/10 p-4'>
                <p className='text-3xl font-bold'>500+</p>
                <p className='text-sm text-gray-200'>DSA Solved</p>
              </div>
              <div className='rounded-2xl bg-white/10 p-4'>
                <p className='text-3xl font-bold'>Top 5</p>
                <p className='text-sm text-gray-200'>HackIITV Finalist</p>
              </div>
            </div>
          </article>

          <article className='lg:col-span-3 rounded-3xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur p-5 sm:p-6'>
            <h3 className='text-2xl sm:text-3xl font-semibold text-black dark:text-white mb-4'>Experience at Aurameter</h3>
            <ul className='space-y-3'>
              {experiencePoints.map((point) => (
                <li key={point} className='flex items-start gap-3 text-[#4d4e54] dark:text-gray-300'>
                  <span className='mt-2 h-2.5 w-2.5 rounded-full bg-[#111827] dark:bg-white'></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className='lg:col-span-2 rounded-3xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur p-5 sm:p-6'>
            <h3 className='text-2xl sm:text-3xl font-semibold text-black dark:text-white mb-4'>Key Wins</h3>
            <ul className='space-y-3'>
              {achievements.map((item) => (
                <li key={item} className='flex items-start gap-3 text-[#4d4e54] dark:text-gray-300'>
                  <FiAward className='mt-1.5 text-[#111827] dark:text-white shrink-0' size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* <article className='lg:col-span-5 rounded-3xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur p-5 sm:p-6'>
            <h3 className='text-2xl sm:text-3xl font-semibold text-black dark:text-white mb-4'>Featured Project: Prepmate</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <ul className='space-y-3'>
                {projectHighlights.map((item) => (
                  <li key={item} className='flex items-start gap-3 text-[#4d4e54] dark:text-gray-300'>
                    <span className='mt-2 h-2.5 w-2.5 rounded-full bg-[#111827] dark:bg-white'></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                {skillBuckets.map(({ title, icon: Icon, stack }) => (
                  <div key={title} className='rounded-2xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/35 p-4'>
                    <div className='flex items-center gap-2 mb-3'>
                      <Icon size={16} className='text-[#111827] dark:text-white' />
                      <h4 className='font-semibold text-black dark:text-white'>{title}</h4>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {stack.map((tech) => (
                        <span
                          key={tech}
                          className='text-xs px-2.5 py-1 rounded-full border border-black/10 dark:border-white/20 text-[#31323a] dark:text-gray-300 bg-[#f8f8f8] dark:bg-white/10'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  );
};

export default About;