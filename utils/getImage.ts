enum ImageSizes {
  Big = "b",
  Small = "s",
}

interface ImageTing {
  imageId: string;
  size?: ImageSizes;
}

export default function getImageUrl(imageUrl: string) {
  return "https://i.imgur.com/" + imageUrl + ".jpg";
}
