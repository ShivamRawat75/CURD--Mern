import mongoose from "mongoose"



const Connection=async(username,password)=>{

    const URL=`mongodb+srv://${username}:${password}@mern-crud.iytptht.mongodb.net/?retryWrites=true&w=majority`;

    try {

        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("database connected sucessully");
        
    } catch (error) {
        console.log("error while connecting database",error);
        
    }

}

export default Connection;