'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AdmissionSchema = new Schema({
    fullname: {
        type: String,
    },
        pid: {
            type: String,

        },
        telno: {
            type: String,

        },
        created: {
            type: Date,
            default: Date.now
        },
        updated: {
            type: Date
        },
        createby: {
            _id: {
                type: String
            },
            username: {
                type: String
            },
            displayname: {
                type: String
            }
        },
        updateby: {
            _id: {
                type: String
            },
            username: {
                type: String
            },
            displayname: {
                type: String
            }
        }
    });

mongoose.model("Admission", AdmissionSchema);