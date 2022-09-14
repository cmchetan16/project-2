const collageModel = require('../models/collegeModel')
const validator = require('../util/validator')

const createCollage = async (req, res) => {
    try {
        const reqBody = req.body;
        const { name, fullName, logoLink } = reqBody;

        // ------------------ data present or not in the body--------------------
        const objKey = Object.keys(reqBody)

        if (objKey == 0)
            return res.status(400).send({ status: false, message: 'Please fill data' })

        if (objKey > 4)
            return res.status(400).send({ status: false, message: 'You can\'t add extra field' })

        //----------------field present or not in the body-----------------

        if (!name)
            return res.status(400).send({ status: false, message: 'Please fill name' })

        if (!fullName)
            return res.status(400).send({ status: false, message: 'Please fill fullName' })

        if (!logoLink)
            return res.status(400).send({ status: false, message: 'Please fill logoLink' })

        // ------------------------ data validations-----------------------------
        if (!validator.isValidName(name))
            return res.status(400).send({ status: false, message: 'Enter valid name' });

        if (!validator.isValidText(fullName))
            return res.status(400).send({ status: false, message: 'Enter valid fullName' });

        if (!validator.isValidLink(logoLink))
            return res.status(400).send({ status: false, message: 'Enter valid logoLink' });

        // ------------------------ collage creation-----------------------------
        const saveData = await collageModel.create(reqBody)
        return res.status(201).send({ status: true, data: saveData })

    } catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
}





module.exports = { createCollage }
