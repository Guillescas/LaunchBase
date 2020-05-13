const fs = require('fs')
const data = require('../../../data.json')
const { age, date } = require('../../lib/utils')

// index
exports.index = (req, res) => {
  return res.render('students/index', { student: data.students })
}

// create
exports.create = (req, res) => {
  return res.render('students/create')
}

// post
exports.post = (req, res) => {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send(`Please, fill all fields ${key}`)
    }
  }

  let { avatar_url, birth, name, email, schoolingYear, workload  } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.students.length + 1)

  data.students.push({
    id,
    avatar_url,
    name,
    birth,
    email,
    schoolingYear,
    workload,
    created_at,
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Write file error.')

    return res.redirect('/students')
  })
  // return res.send(req.body)
}

// show
exports.show = (req, res) => {
  const { id } = req.params

  const foundTeacher = data.students.find((student) => {
    return student.id == id
  })

  const student = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    date: date(foundTeacher.created_at).format,
    schoolingPresent: SVGLinearGradientElement(foundTeacher.schoolingYear)
  }

  if (!foundTeacher) return res.send('Teacher not found!')

  return res.render('students/show', { student })
}

// edit
exports.edit = (req, res) => {
  const { id } = req.params

  const foundTeacher = data.students.find((student) => {
    return student.id == id
  })

  const student = {
    ...foundTeacher,
    birth: date(foundTeacher.birth).iso,
    schoolingPresent: SVGLinearGradientElement(foundTeacher.schoolingYear)
  }

  if (!foundTeacher) return res.send('Teacher not found!')

  return res.render('students/edit', { student })
}

// update
exports.put = (req, res) => {
  const { id } = req.body
  let index = 0

  const foundTeacher = data.students.find((student, foundIndex) => {
    if (id == student.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundTeacher) return res.send(`Teacher not found`)

  const student = {
  ...foundTeacher,
  ...req.body,
  birth: Date.parse(req.body.birth),
  id: Number(req.body.id)
  }

  data.students[index] = student

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send(`Write File error! ${err}`)

    return res.redirect(`/students/${id}`)
  })
}

// delete
exports.delete = (req, res) => {
  const { id } = req.body

  const filteredTeachers = data.students.filter((student) => {
      return student.id != id
  })

  data.students = filteredTeachers

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send(`Write file error! ${err}`)

    return res.redirect('/students')
  })
}