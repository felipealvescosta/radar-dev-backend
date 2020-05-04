const Dev = require('../Models/Devs');
const parsrStringToArray = require('../utils/parseStringToArray');

module.exports = {
  async index(req, res){
    const {latitude, longitude, techs}  = req.query;
    const techsArray = parsrStringToArray(techs);
    
    const devs = await Dev.find({
      techs:{
        $in:techsArray,
      },
      location:{
        $near:{
          $geometry:{
            type:'Point',
            coordinates:[longitude, latitude],
          }, 
          $maxDistance:100000, 
        },
      },
    });

    return res.json(devs)
  }
};