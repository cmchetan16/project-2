const internModel = require('../models/internModel')
const collegeModel = require('../models/collegeModel')
const validator = require('../util/validator')

// ----------------------------------------createCollege----------------------------------------
const createIntern = async (req, res) => {
    try {
        const reqBody = req.body
        const { name, email, mobile, collegeId } = reqBody

        // ----------------------- data present or not in the body--------------------
        const objKey = Object.keys(reqBody)
        if (objKey == 0)
            return res.status(400).send({ status: false, massage: 'Please fill data' })
        if (objKey > 4)
            return res.status(400).send({ status: false, massage: 'You can\'t add extra field' })

        //-----------------------field present or not in the body-----------------------

        if (!name)
            return res.status(400).send({ status: false, massage: 'Please fill name' })

        if (!email)
            return res.status(400).send({ status: false, massage: 'Please fill email' })

        if (!mobile)
            return res.status(400).send({ status: false, massage: 'Please fill mobile' })

        if (!collegeId)
            return res.status(400).send({ status: false, massage: 'Please fill collegeId' })

        // ---------------------------- data validations------------------------------
        if (!validator.isValidText(name))
            return res.status(400).send({ status: false, message: 'Enter valid name' });

        if (!validator.isValidEmail(email))
            return res.status(400).send({ status: false, message: 'Enter valid email' });

        if (!validator.isValidMobile(mobile))
            return res.status(400).send({ status: false, message: 'Enter valid mobile' });

        if (!validator.isValidObjectId(collegeId))
            return res.status(400).send({ status: false, message: 'Enter valid collegeId' });

        // ------------------------ intern creation-----------------------------
        const saveData = await internModel.create(reqBody);
         res.status(201).send({ status: true, data: saveData });

    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
};

//-------------------------------------------collegeDetails---------------------------------------------
const collegeDetails = async (req, res) => {
    try {
        const reqQuery = req.query;
        const collageName = reqQuery.collageName;

        if (!collageName)
            return res.status(400).send({ status: false, message: 'Query not Received' });

        const collage = await collegeModel.findOne(reqQuery)

        if (!collage)
            return res.status(404).send({ status: false, message: `${collageName} Not Found, Register First` });

        const collageId = collage._id

        const { name, fullName, logoLink } = collage

        const data = { name, fullName, logoLink }

        const internList = await internModel.find(collageId).select({ _id: 1, name: 1, email: 1, mobile: 1 })

        if (internList.length == 0)
            return res.status(400).send({ status: false, massage: `${collageName} collage have no intern` })

        data["interests"] = [...internList];
        res.status(200).send({ status: true, data: data });

    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
};




module.exports = { createIntern, collegeDetails }