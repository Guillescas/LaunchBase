const recipeData = require("../../data")

module.exports = {
  management(req, res) {
    return res.render('admin/management', { items: recipeData })
  },
  manegements(req, res) {
    return res.render('admin/management/:id', { items: recipeData })
  }
}