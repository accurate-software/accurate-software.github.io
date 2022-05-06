const Categorie = require('./categorie.js');
const { QueryTypes } = require('sequelize');
const statusCodes = require('../../utils/statusCodes');

module.exports = categoriaRoutes = (app, sequelize) => {
  app.delete('/categorie/:id', async (req, res) => {
    const { id } = req.params;
    await Categorie.destroy({
      where: {
        id: id
      }
    });
    res.status(statusCodes.OK).json({
      success: true,
      message: 'Category deleted successfully!'
    });
  });

  app.get('/categorie', async (req, res) => {
    const categories = await Categorie.findAll();
    res.status(statusCodes.OK).json({
      success: true,
      response: categories
    });
  });

  app.get('/categorie/:id', async (req, res) => {
    const { id } = req.params;
    const categories = await Categorie.findOne({
      where: {
        id: id
      }
    });
    if (categories) {
      res.status(statusCodes.OK).json({
        success: true,
        response: categories
      });
    } else {
      res.status(statusCodes.BAD_REQUEST).json({
        success: false,
        message: "Category dont exist"
      });
    }
  });

  app.put('/categorie/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    await Categorie.update({ name: name }, {
      where: {
        id: id
      }
    });
    res.status(statusCodes.OK).json({
      success: true,
      message: 'Categorie atualizada com sucesso!'
    });

  });

  app.post('/categorie', async (req, res) => {
    try {
      const { name } = req.body;
      if (typeof name === 'string') {
        await Categorie.create({
          name: name
        });
        res.status(statusCodes.CREATED).json({
          success: true,
          message: 'Category registered successfully!'
        });
      } else {
        res.status(statusCodes.BAD_REQUEST).json({
          success: false,
          message: 'Category name is required!'
        });
      }
    } catch (e) {
      console.log(`Error: ${e}`)
      res.status(statusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Could not create this category!'
      });
    } 
  });


}

