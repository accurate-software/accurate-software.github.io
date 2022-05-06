const LostFound = require('./lostFound.js');
const { QueryTypes } = require('sequelize');
const statusCodes = require('../../utils/statusCodes');

module.exports = achadosPerdidosRoutes = (app, sequelize) => {
  app.delete('/lostFound/:id', async (req, res) => {
    const { id } = req.params;
    await LostFound.destroy({
      where: {
        id: id
      } 
    });
    res.status(statusCodes.OK).json({
      success: true,
      message: 'Item deleted successfully!'
    });
  });

  app.get('/lostFound', async (req, res) => {
    const response = await sequelize.query(
      `
      SELECT 	AP.id, AP.name, AP.status, AP.date, C.name AS categories
      FROM lost_founds AS AP
      INNER JOIN categories AS C ON (C.id = AP.categorie);
      `,
      {
        nest: true,
        type: QueryTypes.SELECT,
        raw: true
      }
    );

    res.status(statusCodes.OK).json({
      success: true,
      response: response
    });
  });

  app.get('/lostFound/:id', async (req, res) => {
    const { id } = req.params;
    const response = await sequelize.query(
      `
      SELECT 	AP.id, AP.name, AP.status, AP.date, C.name AS categories
      FROM lost_founds AS AP
      INNER JOIN categories AS C ON (C.id = AP.categorie)
      WHERE AP.id=${id};
      `,
      {
        nest: true,
        type: QueryTypes.SELECT,
        raw: true
      }
    );
    if (response) {
      res.status(statusCodes.OK).json({
        success: true,
        response: response[0]
      });
    } else {
      res.status(statusCodes.BAD_REQUEST).json({
        success: false,
        message: "This item dont exist"
      });
    }
  });

  app.put('/lostFound/:id', async (req, res) => {
    const { name, status, date, categorie } = req.body;
    const { id } = req.params;
    await LostFound.update({
      name: name,
      status: status,
      date: date,
      categorie: categorie
    }, {
      where: {
        id: id
      }
    });
    res.status(statusCodes.OK).json({
      success: true,
      message: 'Item successfully updated!'
    });

  });

  app.post('/lostFound', async (req, res) => {
    try {
      const { name, status, date, categorie } = req.body;
      await LostFound.create({
        name: name,
        status: status,
        date: date,
        categorie: categorie
      });
      res.status(statusCodes.CREATED).json({
        success: true,
        message: 'Item registered successfully!'
      });
    } catch (e) {
      console.log(`Error: ${e}`)
      res.status(statusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Unable to register this Item!'
      });
    }
  });

  app.get('/lostFound/:categorie/:startdate/:enddate', async (req, res) => {
    const { categorie } = req.params;
    const { startdate } = req.params;
    const { enddate } = req.params;

    const response = await sequelize.query(
      `
      SELECT AP.id, AP.name, AP.status, AP.date, C.name AS categories
      FROM lost_founds AS AP
      INNER JOIN categories AS C ON (C.id = AP.categorie)
      WHERE C.id= '${categorie}' AND date(AP.date) BETWEEN date('${startdate}') AND date('${enddate}');
      `,
      {
        nest: true,
        type: QueryTypes.SELECT, 
        raw: true
      }
    );
      if (response) {
        res.status(statusCodes.OK).json({
          success: true,
          response: response
        });
      } else {
        res.status(statusCodes.BAD_REQUEST).json({
          success: false,
          message: "This item dont exist!"
        });
      }
  });


}