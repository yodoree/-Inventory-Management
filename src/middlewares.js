import multer from "multer";

export const imageUpload = multer({
  dest: "uploads/image/",
  limits: {
    fileSize: 1000000,
  },
});
