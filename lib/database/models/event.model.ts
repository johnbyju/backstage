
import { Document, model, models, Schema } from "mongoose";

export interface Ievent extends Document {
    _id :string;
    title: string;
    description ?:string ;
    location ?: string ;
    CreatedAt: string;
    imageUrl: string;
    startDateTime:string;
    endDateTime:string ;
    price ?:string;
    isFree: boolean ;
    url ?:string;
    category : {_id :string ,name :string}
    organizer : {_id: string ,firstName :string ,lastName:string}
}
const EventSchema = new Schema({
    title: { type: String, required: true, },
    description: { type: String },
    location: { type: String },
    CreatedAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url :{type :String},
    category :{type:Schema.Types.ObjectId,ref :'Category'},
    organizer :{type :Schema.Types.ObjectId,ref : 'User'},
})

const Event = models.Event || model('Event',EventSchema);

export default Event ;