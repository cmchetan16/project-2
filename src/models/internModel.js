const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        mobile: String,
        collegeId: {
            type: ObjectId,
            ref: "Collage"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model('Intern', internSchema)

