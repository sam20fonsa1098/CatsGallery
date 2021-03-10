const extensions = ['.jpg', '.jpeg', '.bmp', '.gif', '.png'];
export const formatImageValidation = (image: string): boolean => {
  let status = false;
  extensions.forEach((extension) => {
    if (image.toLowerCase().includes(extension)) {
      status = true;
    }
  });
  return status;
};
