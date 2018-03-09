const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDb server');

    db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        Console.log('Unable to fetch todos',err);
    });
});