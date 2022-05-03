const Category = require('./category.js');

module.exports = categoryRoutes = (app) => {
  app.delete('/category/:id', async (req, res) => {
    const { id } = req.params;
    await Category.destroy({
      where: {
        id: id
      }
    });
    res.status(200).json({
      success: true,
      message: 'Category deleted with success!'
    });
  });

  app.get('/category', async (req, res) => {
    const categories = await Category.findAll();
    res.status(200).json({
      success: true,
      response: categories
    });
  });

  app.get('/category/:id', async (req, res) => {
    const { id } = req.params;
    const categories = await Category.findOne({
      where: {
        id: id
      }
    });
    if (categories) {
      res.status(200).json({
        success: true,
        response: categories
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Category dont exist!"
      });
    }
  });

  app.put('/category/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    await Category.update({ name: name }, {
      where: {
        id: id
      }
    });
    res.status(200).json({
      success: true,
      message: 'Category updated with success!'
    });

  });

  app.post('/category', async (req, res) => {
    try {
      const { name } = req.body;
      if (typeof name === 'string') {
        await Category.create({
          name: name
        });
        res.status(200).json({
          success: true,
          message: 'Category created!'
        });
      } else {
        res.status(400).json({
          success: false,
          message: 'Name is required!'
        });
      }
    } catch (e) {
      console.log(`Error: ${e}`)
      res.status(400).json({
        success: false,
        message: 'Error, could not create this category.'
      });
    }
  });
}