const { reset } = require("nodemon");
const service = require("../Services/calculator")

const validator = async (req, res)=>{
    const result = await service.calculate(req.query);
    res.send({
        status:0,
        message: "Request Successful",
        fresult : result
    });
}

module.exports = {validator};