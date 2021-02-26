import React from 'react'
import DocumentDownload from 'icons/DocumentDownload'
import JobExperienceBlock from 'components/JobExperienceBlock'

const SectionTitle = ({ title }) => (
  <p className="text-xl uppercase tracking-wide font-semibold">{title}</p>
)

const ResumePage = () => (
  <div>
    <div className="flex items-center mb-10">
      <h1 className="text-4xl text-gray-800 dark:text-gray-200">Resume</h1>
      <div className="flex-1" />
      <button type="button" title="Download">
        <DocumentDownload className="h-8 text-indigo-500" />
      </button>
    </div>
    <div className="my-4 w-full h-0.5 bg-gray-100 dark:bg-gray-800" />
    <div className="prose prose-xl dark:prose-light mt-10 space-y-10">
      <div>
        {/* header section */}
        <h2 className="text-center text-3xl m-0">Nishant Singh</h2>
        <p className="text-base text-center text-gray-700 dark:text-gray-300">
          <a
            href="mailto:saysnishant@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            saysnishant@gmail.com
          </a>
          ,&nbsp;
          <a href="tel:+919790464014" target="_blank" rel="noreferrer">
            9790464014
          </a>
          ,&nbsp;
          <a
            href="https://github.com/inishant"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          ,&nbsp;
          <a href="https://nishant-singh.com" target="_blank" rel="noreferrer">
            Website
          </a>
        </p>
      </div>
      <div>
        {/* summary section */}
        <SectionTitle title="Summary" />
        <p>
          I am a full-stack developer who loves to build products and experiment
          with new technologies. I enjoy taking ownership of products/features
          and building them end-to-end. I also enjoy placing myself in the
          customer’s shoes to design functionality and onboarding techniques to
          help them meet their goals.
        </p>
      </div>
      <div>
        {/* skills section */}
        <SectionTitle title="Skills" />
        <ul>
          <li>Languages: JavaScript, Python, C/C++, HTML, CSS</li>
          <li>
            Frameworks/Libraries: React, React-Native, Next.js, Django, Tailwind
            CSS
          </li>
          <li>Testing: Jest, Cypress, Puppeteer, Python unittest</li>
          <li>Databases/Caches: MySQL, PostgreSQL, Redis</li>
          <li>Misc: Github Actions, Docker, K8S, Celery, RabbitMQ</li>
        </ul>
      </div>
      <div>
        {/* work experience */}
        <SectionTitle title="Experience" />
        <div className="space-y-10">
          <JobExperienceBlock
            title="Founder, CEO at Ylurn Technology"
            stack="React (Next.js), Django, Tailwind CSS, AWS, Docker Compose"
            duration="Jan 2018 - Jan 2021"
            description="I founded Ylurn, an Ed-Tech SaaS to help teachers grow their teaching businesses online. I was responsible for all the engineering, product/design and marketing/sales efforts at Ylurn during the initial years."
          />
          <JobExperienceBlock
            title="iOS Developer at 1000Lookz"
            stack="OpenCV, Swift, XCode"
            duration="Jan 2016 - May 2016"
            description="Worked on an iOS app built using Swift which allowed users to try on different eye-wear virtually (similar to apps like Lenskart)."
          />
          <JobExperienceBlock
            title="iOS Developer at Shujat Technologies"
            stack="Swift, XCode"
            duration="Jan 2016 - May 2016"
            description="Created an iOS app using Swift which was used to pay at shops using QR codes and even had an offline mode."
          />
        </div>
      </div>
      <div>
        {/* education */}
        <SectionTitle title="Education" />
      </div>
    </div>
  </div>
)

export default ResumePage
