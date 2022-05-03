const LostFound = require('./lostFound.js');
const { QueryTypes } = require('sequelize');

module.exports = lostFoundRoutes = (app, sequelize) => {
  app.delete('/lostFound/:id', async (req, res) => {
    const { id } = req.params;
    await LostFound.destroy({
      where: {
        id: id
      }
    });
    res.status(200).json({
      success: true,
      message: 'Item deletado com sucesso!'
    });
  });

  app.get('/lostFound', async (req, res) => {
    const response = await sequelize.query(
      `
      SELECT 	AP.id, AP.name, AP.status, AP.date, C.name AS category
      FROM LostFound AS AP
      INNER JOIN Category AS C ON (C.id = AP.category);
      `,
      {
        nest: true,
        type: QueryTypes.SELECT,
        raw: true
      }
    );

    res.status(200).json({
      success: true,
      response: response
    });
  });

  app.get('/lostFound/:id', async (req, res) => {
    const { id } = req.params;
    const response = await sequelize.query(
      `
      SELECT 	AP.id, AP.name, AP.status, AP.date, C.name AS category
      FROM LostFound AS AP
      INNER JOIN Category AS C ON (C.id = AP.category)
      WHERE AP.id=${id};
      `,
      {
        nest: true,
        type: QueryTypes.SELECT,
        raw: true
      }
    );
    if (response) {
      res.status(200).json({
        success: true,
        response: response[0]
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Item dont exist"
      });
    }
  });

  app.put('/lostFound/:id', async (req, res) => {
    const { name, status, date, category } = req.body;
    const { id } = req.params;
    await LostFound.update({
      name: name,
      status: status,
      date: date,
      category: category
    }, {
      where: {
        id: id
      }
    });
    res.status(200).json({
      success: true,
      message: 'Item updated with success!'
    });

  });

  app.post('/lostFound', async (req, res) => {
    try {
      const { name, status, date, category } = req.body;
      await LostFound.create({
        name: name,
        status: status,
        date: date,
        category: category
      });
      res.status(200).json({
        success: true,
        message: 'Item created with sucess!'
      });
    } catch (e) {
      console.log(`Error: ${e}`)
      res.status(400).json({
        success: false,
        message: 'Could not create this Item!'
      });
    }
  });
}