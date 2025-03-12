const mongoose=require("mongoose");

const connectionRequestSchema= new mongoose.Schema({

fromUserId:{
  type:mongoose.Schema.Types.ObjectId,
  required:true,
},
toUserId:{
  type: mongoose.Schema.Types.ObjectId,
  required:true,
},
status:{
  type: String,
  required: true,
  enum:{
    values:["ignore", "interested", "accepted", "rejected"],
    message:'{VALUE} is not supported',
  }
},

},
{timestamps: true,}
);

connectionRequestSchema.index({ fromUserId:1, toUserId:1},{unique:true});

connectionRequestSchema.pre("save", async function(next){
  const connectionRequest=this;
  // check if the fromUserId is same as the toUserId
  if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
    throw new error ("fromUserId and toUserId cannot be the same");
  }
  next();
})

const ConnectionRequestModel = new mongoose.model("ConnectionRequest", connectionRequestSchema);

module.exports= ConnectionRequestModel;