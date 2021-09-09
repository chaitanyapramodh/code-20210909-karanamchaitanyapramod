class BmiClass{
    constructor(height,weight){
        this.BMI=parseFloat((weight/(height/100*height/100)).toFixed(2))
        this.healthRisk=this.calculateHealthRisk()
    }
    calculateHealthRisk(){
        if(this.BMI<=18.4){
           return "Malnutrition risk"
        }
        else if(this.BMI>18.4 && this.BMI<=24.9){
           return "Low risk"
        }
        else if(this.BMI>=25 && this.BMI<=29.9){
            return "Enhanced risk"
         }
         else if(this.BMI>=30 && this.BMI<=34.9){
            return "Medium risk"
         }
         else if(this.BMI>=35 && this.BMI<=39.9){
            return "High risk "
         }
         else {
            return "Very high risk "
         }
    }
}

module.exports=BmiClass