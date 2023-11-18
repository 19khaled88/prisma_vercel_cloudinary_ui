import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
	cloudinary_url: process.env.CLOUDINARY_URL as string,
    api_link:process.env.API_LINK as string,
    api_local_link:process.env.API_LOCAL_LINK as string,
  
};