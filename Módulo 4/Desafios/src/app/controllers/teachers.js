const fs = require('fs')
const data = require('../../../data.json')
const { age, date } = require('../../lib/utils')

// index
exports.index = (req, res) => {
  return res.render('teachers/index', { teacher: data.teachers })
}

// create
exports.create = (req, res) => {
  return res.render('teachers/create')
}

// post
exports.post = (req, res) => {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send(`Please, fill all fields ${key}`)
    }
  }

  let { avatar_url, birth, name, schooling, classType, materias  } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.teachers.length + 1)

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    schooling,
    classType,
    materias,
    created_at,
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Write file error.')

    return res.redirect('/teachers')
  })
  // return res.send(req.body)
}

// show
exports.show = (req, res) => {
  const { id } = req.params

  const foundTeacher = data.teachers.find((teacher) => {
    return teacher.id == id
  })

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    materias: foundTeacher.materias.split(","),
    date: date(foundTeacher.created_at).format
  }

  if (!foundTeacher) return res.send('Teacher not found!')

  return res.render('teachers/show', { teacher })
}

// edit
exports.edit = (req, res) => {
  const { id } = req.params

  const foundTeacher = data.teachers.find((teacher) => {
    return teacher.id == id
  })

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth).iso
  }

  if (!foundTeacher) return res.send('Teacher not found!')

  return res.render('teachers/edit', { teacher })
}

// update
exports.put = (req, res) => {
  const { id } = req.body
  let index = 0

  const foundTeacher = data.teachers.find((teacher, foundIndex) => {
    if (id == teacher.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundTeacher) return res.send(`Teacher not found`)

  const teacher = {
  ...foundTeacher,
  ...req.body,
  birth: Date.parse(req.body.birth),
  id: Number(req.body.id)
  }

  data.teachers[index] = teacher

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send(`Write File error! ${err}`)

    return res.redirect(`/teachers/${id}`)
  })
}

// delete
exports.delete = (req, res) => {
  const { id } = req.body

  // O method filter tira apenas 
  const filteredTeachers = data.teachers.filter((teacher) => {
      return teacher.id != id
  })

  data.teachers = filteredTeachers

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send(`Write file error! ${err}`)

    return res.redirect('/teachers')
  })
}