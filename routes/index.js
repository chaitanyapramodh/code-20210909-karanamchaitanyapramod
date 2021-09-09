var express = require('express');
const BmiClass = require('../model/BMIclass');
var router = express.Router();
var healtRiskArray=[];

/* calculate BMI. */
router.post('/calculateBMI', (req, res,err) => {
  healtRiskArray=calculateBMIHealthRisk(req.body.bmiArray);
   res.send(healtRiskArray);
});;

//get healt risk of specific user 
router.get('/calculateBMI/:height/:weight', (req, res) => {
    bmiObj=new BmiClass(req.params.height,req.params.weight)
    res.send(`Your BMI is ${bmiObj.BMI}, you are at ${bmiObj.healthRisk}`);
});

router.get('/test', (req, res) => {
    res.send("tested");
});

router.use('**',(req,res)=>{
  res.status(404).json({
    message:"Hey Buddy you are lost"
  });
})

function calculateBMIHealthRisk(bmiArray){
  for(let record of bmiArray){
    let bmiObj=new BmiClass(record.HeightCm,record.WeightKg)
    healtRiskArray.push(bmiObj)
 }
 return healtRiskArray
 
}
module.exports = router;
