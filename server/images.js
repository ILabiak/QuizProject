'use strict';

require("dotenv").config({ path: __dirname + "/configdata.env" });
//using https://cloudinary.com/ to store images for quiz questions
const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

  const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      unique_filename: true,
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};

// Example of uploadImage request
// {
//     asset_id: '3773a4411687ecb41f2d00ae38dc7ea2',
//     public_id: 'wtpw6inkluu39tofbdo4',
//     version: 1656866785,
//     version_id: '6b93040e7d8b8df8239cb356a4e36345',
//     signature: '842527fdb032859d2bdb62a451949f3405756741',
//     width: 566,
//     height: 441,
//     format: 'png',
//     resource_type: 'image',
//     created_at: '2022-07-03T16:46:25Z',
//     tags: [],
//     bytes: 174590,
//     type: 'upload',
//     etag: '2a96228ac2d4e4d459cd42e781907312',
//     placeholder: false,
//     url: 'http://res.cloudinary.com/dye72przm/image/upload/v1656866785/wtpw6inkluu39tofbdo4.png',
//     secure_url: 'https://res.cloudinary.com/dye72przm/image/upload/v1656866785/wtpw6inkluu39tofbdo4.png',
//     original_filename: 'image',
//     api_key: '424524787472998'
//   }

(async () => {

     await uploadImage(__dirname+'/image1.png')

})()