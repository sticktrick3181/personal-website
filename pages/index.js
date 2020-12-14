import React from 'react'
import GetAgeFromBirthday from '../utils/GetAgeFromBirthday'
import CodeIcon from '../icons/Code'

const HomePage = () => {
  const birthDay = new Date('1996-01-15')
  const myAge = GetAgeFromBirthday(birthDay)
  return (
    <div>
      <section>
        <p className="text-indigo-700 text-3xl">Hey!</p>
        <p className="text-gray-700 text-2xl my-4">
          {`My name is Nishant Singh. I am ${myAge} years old. I live in India.
      I am a technology enthusiast and love to build things. I am also the
      founder of `}
          <a className="ns-link" href="https://Ylurn.com">
            Ylurn.com
          </a>
          . I am passionate about the future of education and software.
        </p>
      </section>
      <section className="mt-8">
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
