import React from 'react'
// import GetAgeFromBirthday from '../utils/GetAgeFromBirthday'
import CodeIcon from '../icons/Code'
import SocialIcon from '../components/SocialIcon'

const sectionClass = 'my-4 py-4'

const HomePage = () => {
  // const birthDay = new Date('1996-01-15')
  // const myAge = GetAgeFromBirthday(birthDay)
  return (
    <div>
      <section className={sectionClass}>
        <p className="text-indigo-700 text-3xl">Hey!</p>
        <p className="text-gray-700 text-2xl my-4">
          My name is Nishant Singh. I am a technology enthusiast, a full-stack
          developer, passionate about the future of education &amp; software,
          and love to build things. I am also the founder of&nbsp;
          <a className="ns-link" href="https://Ylurn.com">
            Ylurn.com
          </a>
          .
        </p>
      </section>
      <section className={sectionClass}>
        <p className="text-indigo-700 text-3xl">Contact</p>
        <div>
          <SocialIcon url="https://twitter.com/iNishant" />
          <SocialIcon url="https://github.com/iNishant" />
          <SocialIcon url="mailto:nishant@ylurn.com" />
          <SocialIcon url="https://www.linkedin.com/in/inishant/" />
          <SocialIcon url="https://facebook.com/saysnishant" />
          <SocialIcon url="https://www.instagram.com/nish.i.am/" />
        </div>
      </section>
      <section className={sectionClass}>
        <p>
          <a
            className="ns-link"
            href="https://github.com/inishant/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            <CodeIcon className="h-4 inline-block align-middle mr-1" /> Source
            of this website
          </a>
        </p>
      </section>
    </div>
  )
}

export default HomePage
