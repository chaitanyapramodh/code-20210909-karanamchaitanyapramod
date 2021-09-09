# code-20210909-karanamchaitanyapramod

Express app to calculate BMI

Funcitonalities:

1)Post request to get BMI and Health risk of multiple records.
2)Get request to get BMI and Health risk of specific User.

steps:
1)setup node modules "npm install"

2)Run "node start" to start the application

3)To get BMI and health risks of multiple users or Array of users ,
 send post request to the URL "http://localhost:4444/calculateBMI",
 and select request body as JSON type and send request as:
 {
   "bmiArray": Array of values
}
ex:
 {
   "bmiArray":[
      {
         "Gender":"Male",
         "HeightCm":171,
         "WeightKg":96
      },
            {
         "Gender":"Male",
         "HeightCm":191,
         "WeightKg":76
      },
   ]
}

4)To get health risk of specific user send GET request to "http://localhost:4444/calculateBMI/height_of_the_user/weight_of_the_user"

ex:"http://localhost:4444/calculateBMI/184/47"

5)To run test cases give "npm run test"
