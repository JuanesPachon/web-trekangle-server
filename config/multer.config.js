import multer from "multer";
import path from "path";

// Configuración de almacenamiento de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(import.meta.dirname, '../public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Filtro de archivos
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('No es un archivo de imagen'), false);
  }
};

// Configuración de Multer
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
});



export default upload;