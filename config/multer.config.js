import multer from "multer";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
import { decode } from "base64-arraybuffer";
import path from "path";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const storage = multer.memoryStorage();

// Filtro de archivos
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("No es un archivo de imagen"), false);
  }
};

// Configuración de Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Middleware para subir a Supabase
const uploadToSupabase = async (req, res, next) => {
  if (req.files) {
    const imagesList = [];

    for (let file of req.files) {
      const { originalname, buffer } = file;
      const filesPath = `${Date.now()}-${originalname}`;
      const fileBase64 = decode(buffer.toString("base64"));

      const { data, error } = await supabase.storage
        .from("trekangle-files")
        .upload(filesPath, fileBase64, {
          contentType: "image/" + path.extname(originalname).substring(1),
        });

      if (error) {
        console.error("Error al subir la imagen a Supabase:",error);
        return next(new Error("Error al subir la imagen a Supabase."));
      }

      imagesList.push(filesPath);
    }

    if (imagesList.length === 0) {
      req.files.supabaseUrl = null;
    } else {
      req.files.supabaseUrl = imagesList;
    }

    next();
  }
  else if (req.file) {
    const { originalname, buffer } = req.file;
    const filePath = `${Date.now()}-${originalname}`;
    const fileBase64 = decode(buffer.toString("base64"));

    const { data, error } = await supabase.storage
      .from("images-trekangle")
      .upload(filePath, fileBase64, {
        contentType: "image/" + path.extname(originalname).substring(1),
      });

    if (error) {
      console.error("Error al subir la imagen a Supabase:");
      return next(new Error("Error al subir la imagen a Supabase."));
    }

    req.file.supabaseUrl = filePath;

    next();
  }
  
  else {
    next()
  }
};

export { upload, uploadToSupabase };
