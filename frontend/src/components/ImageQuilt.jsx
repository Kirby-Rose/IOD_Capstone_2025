import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageQuilt() {
  return (
    <ImageList
      sx={{ width: 1000, height: 1600 }}
      variant="quilted"
      cols={4}
      rowHeight={300}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "../../assets/animalPics/dachshund.jpg",
    title: "Dachshund",
    rows: 2,
    cols: 2,
  },
  {
    img: "./../assets/animalPics/fluffyCat.jpg",
    title: "Burger",
  },
  {
    img: "./../assets/animalPics/greyCat.jpg",
    title: "Camera",
  },
  {
    img: "./../assets/animalPics/hound.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "./../assets/animalPics/jackRussel.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "../../assets/animalPics/kitten.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "./../assets/animalPics/schnauzer.jpg",
    title: "Basketball",
  },
  {
    img: "./../assets/animalPics/tallCat.jpg",
    title: "Fern",
  },
  {
    img: "./../assets/animalPics/terrier.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "./../assets/animalPics/whiteCat.jpg",
    title: "Tomato basil",
  },
  {
    img: "./../assets/dog-cate2.jpg",
    title: "Sea star",
  },
  {
    img: "./../assets/dog-cat.png",
    title: "Bike",
    cols: 2,
  },
];
