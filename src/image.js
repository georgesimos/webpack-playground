const makeImage = (url, attr) => {
  const image = document.createElement("img");
  image.src = url;

  for (const property in attr) {
    image[property] = attr[property];
  }

  return image;
};

export default makeImage;
