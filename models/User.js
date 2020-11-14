const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        room: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        capped: {
            size: 10000,
            max: 4,
        },
    }
);

module.exports = User = mongoose.model('user', UserSchema);
