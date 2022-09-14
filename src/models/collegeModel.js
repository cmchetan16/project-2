const mongoose = require('mongoose')

const collageSchema = new mongoose.Schema(
    {
        name: String,
        fullName: String,
        logoLink: String,
        isDeleted: {
            type: boolean,
            default: false
        }
    }
)

module.exports = mongoose.model('Collage', collageSchema)
