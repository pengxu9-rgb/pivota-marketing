type StaticImageLike = {
  src: string;
  height?: number;
  width?: number;
  blurDataURL?: string;
};

declare module "*.png" {
  const image: StaticImageLike;
  export default image;
}

declare module "*.jpg" {
  const image: StaticImageLike;
  export default image;
}

