import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64fd3cf3ef0e7cef0d2f",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
