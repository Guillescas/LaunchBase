const recipeData = require("../../data")

module.exports = {
  index(req, res) {
    return res.redirect('/home')
  },
  home(req, res) {
    return res.render('user/home')
  },
  about(req, res) {
    return res.render('user/about')
  },
  recipes(req, res) {
    return res.render('user/recipes', { items: recipeData })
  },
  recipe(req, res) {
    const recipeIndex = req.params.index

    // const edit = document.querySelector('.edit-recipe_btn button')

    // edit.addEventListener('click', () => {
    //   res.render('/recipe/:index/edit')
    // })

    res.render("user/recipe", { recipe: recipeData[recipeIndex] });
  },
  edit(req, res) {

    return res.render('user/edit', { items: recipeData })
  }
}