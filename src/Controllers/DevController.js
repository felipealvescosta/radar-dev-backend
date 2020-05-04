const axios = require('axios');
const Dev = require('../Models/Devs');
const parsrStringToArray = require('../utils/parseStringToArray');
module.exports = {
  async create(req,res){
    const {github_username, techs , latitude, longitude } = req.body;
    
    let dev = await Dev.findOne({ github_username });

    if(!dev){
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      const {name = login, avatar_url, bio} = apiResponse.data;
      const techsArray =  parsrStringToArray(techs);
      const location = {
        type:'Point',
        coordinates:[longitude, latitude],
      };
      console.log(location);
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs:techsArray, 
        location, 
      });

      console.log(name, avatar_url, bio, github_username, techs, location);
    }else{
      console.log("Usuário já cadastrado!");
    }
    
    return res.json(dev);
  },

  async index(req,res){
      const devs = await Dev.find();
      console.log(devs);
      return res.json(devs);
  }
}; 