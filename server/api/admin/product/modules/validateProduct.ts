import { z } from 'zod'




export const productSchema = z.object({

  name: z.string({
    required_error: "Product Name is required",
    invalid_type_error: "Product Name must be a string",
  }).min(3, "Product Name must be at least 3 characters long"),

  color: z.string({
    required_error: "Color is required",
    invalid_type_error: "Color must be a string",
  }).min(3, "Color must be at least 3 characters long"),
  price: z.number().positive('Price should be greather than 0'),
  categoryId: z.number().positive('Category should be greather than 0'),



});



export const deleteProductSchema = z.object({

  id: z.number().positive('id should be a number'),



});






// Setup multer disk storage
export const storage = multer.diskStorage({
  destination: function (req:any, file:any, cb:(...args:any[])=>any) {
      const uploadDir = './public/uploads/'

      // Create the upload directory if it doesn't exist
      if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true })
      }

      cb(null, uploadDir)
  },
  //   shoe.jpg=33939393449.jp
  filename: function (req:any, file:any, cb:(...args:any[])=>any) {
      cb(null, Date.now() + path.extname(file.originalname)) // Unique filename
  },
})


// ✅ Allow only images (jpg, jpeg, png, gif, webp)
const imageFileFilter = (req:any, file:any, cb:(...args:any[])=>any) => {
  const allowedTypes = /jpeg|avif|jpg|png|gif|webp/
  const isImage = allowedTypes.test(file.mimetype)

  if (isImage) {
      cb(null, true)
  } else {
      cb(new Error("Invalid file extension"), false)
  }
}


const upload = multer({ 
  storage: storage, 
  fileFilter: imageFileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB
})
  .fields([
      { name: 'file', maxCount: 1 },
      { name: 'productId', maxCount: 1 },
  ])


function uploadProductImage(event: any) {
  return new Promise<{ imageUrl: string, productId: number }>((resolve, reject) => {
      upload(event.req, event.res, async (err:any) => {
          if (err) {
              reject(err)
          }


          const file = event.req.files?.['file']?.[0];
          const productId = Number(event.req.body?.productId);

          if (!file || !productId) {
              reject(new Error("Missing file or productId"));
              return;
          }

          const imageUrl = `/uploads/${file.filename}`;
          resolve({ imageUrl, productId });

      })
  })
}