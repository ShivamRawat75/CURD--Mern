import mongoose from "mongoose"



const Connection=async()=>{

    const URL='mongodb+srv://admin:54321@cluster0.xubb5fh.mongodb.net/?retryWrites=true&w=majority';

    try {

        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("database connected sucessully");
        
    } catch (error) {
        console.log("error while connecting database",error);
        
    }

}

export default Connection;