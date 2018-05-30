import {Schema} from 'mongoose';

export const BuildDefinitionSchema = new Schema({
    projectId: String,
    name: String,
    config: {
        sources: [{
            _id: false,
            id: String,
            type: {type: String},
            name: String,
            reference: {
                _id: false,
                type: {type: String},
                name: String,
            },
            beforeBuildTasks: [{
                _id: false,
                type: {type: String},
                sourceRelativePath: String,
                destinationRelativePath: String,
                relativePath: String,
            }],
        }],
        proxiedPorts: [{
            _id: false,
            id: String,
            serviceId: String,
            name: String,
            port: Number,
        }],
        environmentalVariables: [{
            _id: false,
            name: String,
            value: String,
        }],
        summaryItems: [{
            _id: false,
            name: String,
            text: String,
        }],
        composeFiles: [{
            _id: false,
            sourceId: String,
            relativePaths: [String],
        }],
    },
});
