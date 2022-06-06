const app = Vue.createApp({
  data() {
    return {
      url: "www.netninja.co.uk",
      message: "WELCOME TO LIZ'S LIBRARY",
      showBooks: true,
      textBooks: [
        {
          title: "in the chest of a woman",
          author: "Efo Kodjo Mawugbe",
          img: "images/1.jpg",
          isFav: true,
        },
        {
          title: "in the chest of a woman",
          author: "Efo sagaribidi",
          img: "images/1.jpg",
          isFav: false,
        },
        {
          title: "in the chest of a woman",
          author: "Efo sagaribidi",
          img: "images/1.jpg",
          isFav: true,
        },
        {
          title: "in the chest of a woman",
          author: "Efo sagaribidi",
          img: "images/1.jpg",
          isFav: false,
        },
        {
          title: "in the chest of a woman",
          author: "Efo sagaribidi",
          img: "images/1.jpg",
          isFav: true,
        },
      ],
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
//   computed: {
//       filteredBooks() {
//           return this.textBooks.filter((book) => textBooks.isFav)
//       }
//   }
});

app.mount("#main");
