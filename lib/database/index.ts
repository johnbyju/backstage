import mongoose from 'mongoose';

 
const MONGODB_URI =process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conc :null , promise : null };


export const connectToDatabase = async ()=>{
     if(cached.conc) return cached.conc ;

     if(!MONGODB_URI) throw new Error('MongoDB URI is Missing');

     cached.promise = cached.promise || mongoose.connect(MONGODB_URI ,{
        dbName : 'backstage',
        bufferCommands: false
     })

     cached.conc =await cached.promise;

     return cached.conc ;
}

// severAction 
// each server action we call server for connect database 