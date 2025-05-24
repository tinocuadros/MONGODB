import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {});

    const url = `CONECTADO A MONGODB EN SERVER: ${db.connection.host} - EN PUERTO ${db.connection.port}`;
    console.log(url);

  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;

