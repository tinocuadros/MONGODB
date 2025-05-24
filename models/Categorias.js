import mongoose from "mongoose";

const categoriasSchema = mongoose.Schema(
  {
    Imagen: {
      type: String,
      required: true,
      trim: true,
    },
    categoriaNombre: {
      type: String,
      required: true,
      trim: true,
    },
    Descripcion: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Categoria = mongoose.model("Categoria", categoriasSchema);

export default Categoria;

