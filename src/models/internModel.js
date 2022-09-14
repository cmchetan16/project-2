const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        mobile: String,
        collegeId: objectId,
        isDeleted: {
            type: Boolean,
            default:false
        }
    }
)

module.exports=mongoose.model('Intern',internSchema)

