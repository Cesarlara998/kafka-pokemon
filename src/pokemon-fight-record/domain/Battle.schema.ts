import { model, Model, Schema } from "mongoose";

interface IBattle extends Document {
	blue: string;
    red: string;
    result: string;
}

const BattleSchema = new Schema({
    blue: {type:String, required:true},
    red: {type:String, required:true},
    result: {type:Number, required:true},
});

BattleSchema.method("toClient", function () {
	var obj = this.toObject();

	//Rename fields
	obj.id = obj._id;
	delete obj._id;

	return obj;
});

const Fight: Model<IBattle> = model("Pokemon",BattleSchema);

export default Fight;