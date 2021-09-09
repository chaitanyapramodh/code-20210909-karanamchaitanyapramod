const chai = require('chai')
const expect = chai.expect
const app=require('../app')
const request = require('supertest');
describe("Getting health risks for bmi", () => {
        it("should contain property bmi", ()=> {
        request(app).post('/calculateBMI')
        .send({
            "bmiArray":[
               {
                  "Gender":"Male",
                  "HeightCm":171,
                  "WeightKg":96
               }
            ]
         })
        .then((res) => {
            const body = res.body;
            expect(body[0]).to.contain.property('BMI');
            done();
        })
        .catch((err) => done(err));
	})
	it("should contain property health risk", ()=> {
        request(app).post('/calculateBMI')
        .send({
            "bmiArray":[
               {
                  "Gender":"Male",
                  "HeightCm":171,
                  "WeightKg":96
               }
            ]
         })
        .then((res) => {
            const body = res.body;
            expect(body[0]).to.contain.property('healthRisk');
            done();
        })
        .catch((err) => done(err));
	})

    it("correct bmi value expected", ()=> {
        request(app).post('/calculateBMI')
        .send({
            "bmiArray":[
               {
                  "Gender":"Male",
                  "HeightCm":171,
                  "WeightKg":96
               }
            ]
         })
        .then((res) => {
            const body = res.body;
            expect(body[0].BMI).to.equals(32.83);
            done();
        })
        .catch((err) => done(err));
	})
    it("Correct health risk valuation", ()=> {
        request(app).post('/calculateBMI')
        .send({
            "bmiArray":[
               {
                  "Gender":"Male",
                  "HeightCm":171,
                  "WeightKg":96
               }
            ]
         })
        .then((res) => {
            const body = res.body;
            expect(body[0].healthRisk).to.equals('risk');
            done();
        })
        .catch((err) => done(err));
	})

	
})
describe("Getting health risks for specific user", () => {
    it("should calculate and return exact health risk", ()=> {
    request(app).get('/calculateBMI/184/70')

    .then((res) => {
        const body = res.body;
        expect(body).to.contain.equals('Your BMI is 20.68, you are at Low risk');
        done();
    })
    .catch((err) => done(err));
})




})
describe("Invalid page", () => {
    it("should return 404 error", ()=> {
    request(app).get('/Khaleesi')

    .then((res) => {
        const status = res.status;;
        expect(status).to.equals(404);
        done();
    })
    .catch((err) => done(err));
})
it("message for invalid page", ()=> {
    request(app).get('/Khaleesi')

    .then((res) => {
        const status = res.message;;
        expect(status).to.equals("Hey Buddy you are lost");
        done();
    })
    .catch((err) => done(err));
})
})