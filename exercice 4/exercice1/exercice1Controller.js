const {SelectAdressS,SelectParkLane,Insert,CREATE} =require('./ecercice1Servive')

const CREATEController = async (req, res) => {
    
    res.send(await CREATE());
  };

  const InsertController = async (req, res) => {
    
    res.send(await Insert());
  };
  const SelectParkLaneController = async (req, res) => {
    
    res.send(await SelectParkLane());
  };
  const SelectAdressSController = async (req, res) => {
    
    res.send(await SelectAdressS());
  };

  module.exports = {CREATEController,InsertController,SelectParkLaneController,SelectAdressSController}