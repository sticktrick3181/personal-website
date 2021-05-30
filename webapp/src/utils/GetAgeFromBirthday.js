// const birthDay = new Date('1996-01-15')
// const myAge = GetAgeFromBirthday(birthDay)

const GetAgeFromBirthday = (birthday) => {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export default GetAgeFromBirthday
