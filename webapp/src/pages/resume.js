import React, { useRef } from 'react'
import DocumentDownload from 'icons/DocumentDownload'
import JobExperienceBlock from 'components/JobExperienceBlock'
import PageHead from 'components/PageHead'
import ReactToPrint from 'react-to-print'
import GetOGImageWithText from 'utils/GetOGImageWithText'
import { motion } from 'framer-motion'

const SectionTitle = ({ title }) => (
  <p className="text-xl uppercase tracking-wide font-semibold">{title}</p>
)

const ResumePage = () => {
  const resumeRef = useRef()
  return (
    <div className="prose prose-xl dark:prose-light mx-auto">
      <PageHead />
      <PageHead
        title="Nishant Singh • Resume"
        meta={{
          type: 'article',
          image: GetOGImageWithText('Nishant Singh • Resume'),
        }}
      />
      <div className="flex items-center mb-10">
        <h2 className="text-xl m-0 tracking-widest uppercase">Resume</h2>
        <div className="flex-1" />
        <ReactToPrint
          documentTitle="nishant-singh-resume"
          trigger={() => (
            <motion.button
              type="button"
              className="outline-none focus:outline-none"
              title="Download"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <DocumentDownload className="h-7 text-indigo-500" />
            </motion.button>
          )}
          content={() => resumeRef.current}
        />
      </div>
      <div
        className="w-full mt-10 space-y-10 px-6 py-10 border-2 border-gray-300 dark:border-gray-600 print:border-none print:py-0"
        ref={resumeRef}
      >
        <div>
          {/* header section */}
          <h2 className="text-center text-3xl m-0">Nishant Singh</h2>
          <p className="text-base text-center break-words text-gray-700 dark:text-gray-300">
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
            <a
              href="https://nishant-singh.com"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </p>
        </div>
        <div>
          {/* summary section */}
          <SectionTitle title="Summary" />
          <p>
            I am a full-stack developer who loves to build products and
            experiment with new technologies. I also enjoy taking ownership and
            placing myself in the customer’s shoes to design functionality and
            onboarding techniques to help them meet their goals.
          </p>
        </div>
        <div>
          {/* skills section */}
          <SectionTitle title="Skills" />
          <ul>
            <li>Languages: JavaScript, Python, C/C++, HTML, CSS</li>
            <li>
              Frameworks/Libraries: React, React-Native, Next.js, Django,
              Tailwind CSS, Storybook
            </li>
            <li>Testing: Jest, Cypress, Puppeteer, Python unittest</li>
            <li>Databases/Caches: MySQL, PostgreSQL, Redis</li>
            <li>Misc: Github Actions, Docker, K8S, Celery, RabbitMQ</li>
          </ul>
        </div>
        <div>
          {/* work experience */}
          <SectionTitle title="Experience" />
          <div className="space-y-10 print:space-y-0">
            <JobExperienceBlock
              title="Full-Stack Developer, Dukaan®"
              stack="React (Next.js), Django"
              duration="March 2021 - Present"
              description="At Dukaan where we are helping millions of SMEs expand and grow their businesses online."
            />
            <JobExperienceBlock
              title="Founder, CEO at Ylurn Technology"
              stack="React (Next.js), React-Native, Django, Tailwind CSS, AWS, Docker Compose"
              duration="Jan 2018 - Jan 2021"
              description="I founded Ylurn, an Ed-Tech SaaS. At Ylurn I was responsible for all the engineering during the initial years that included developing REST APIs which were consumed by both mobile and web apps and the website which was built using Next.js. I used Storybook to test and design react components and Tailwind CSS for styling components. For testing I relied on E2E browser tests using cypress and jest for unit tests."
            />
            <JobExperienceBlock
              title="iOS Developer at 1000Lookz (Internship)"
              stack="OpenCV, Swift, XCode"
              duration="Jan 2016 - May 2016"
              description="Worked on an iOS app built using Swift which allowed users to try on different eye-wear virtually (similar to apps like Lenskart). My tasks were to use backend APIs to fetch available choices and also to setup OpenCV on the iOS app to do basic image/video transformations before uploading images to the storage service."
            />
            <JobExperienceBlock
              title="iOS Developer at Shujat Technologies (Contract)"
              stack="Swift, XCode"
              duration="Jan 2016 - May 2016"
              description="Created an iOS app using Swift which was used to pay at shops using QR codes and even had an offline mode. I had to replicate the UI of pre-existing android app, work with basic camera, encryption and QR code scanning libraries to implement the payment flow."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
