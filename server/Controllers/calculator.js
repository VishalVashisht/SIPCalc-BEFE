const { request } = require("express");
const service = require("../Services/calculator")


const validate = ({ monthlyInvestment, investmentPeriod, rateOfReturn, rateOfInflation }) => {

    if (monthlyInvestment < 1000 || monthlyInvestment > 10000000) {
        return false;
    }

    if (investmentPeriod < 1 || investmentPeriod > 30) {
        return false;
    }

    if (rateOfReturn < 1 || rateOfReturn > 30) {
        return false;
    }

    if (rateOfInflation < 1 || rateOfInflation > 30) {
        return false;
    }

    return true;
};


const validator = async (req, res) => {

    try {
        if (validate(req.query) === false) {
            res.send(badRequest);
            return;
        }

        const result = await service.calculate(req.query);
        res.send({
            status: 0,
            message: "Request Successful",
            fresult: result
        });
    }
    catch (error) {
        res.send({
            status: -1,
            message: "Something went wrong",
            fresult: error
        })
    }
}

module.exports = { validator };