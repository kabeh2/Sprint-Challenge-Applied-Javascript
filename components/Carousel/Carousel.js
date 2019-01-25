class Carousel {
  constructor(carousel) {
    // reference carousel
    this.carousel = carousel;

    // reference left and right buttons
    this.left = this.carousel.querySelector(".left-button");
    this.right = this.carousel.querySelector(".right-button");

    //reference all images
    this.images = this.carousel.querySelectorAll("img");

    // create a current index
    let carouselIndex = 0;
    this.carouselIndex = carouselIndex;

    // make current image display on screen
    this.images[carouselIndex].style.display = "flex";

    // add event listeners to left and right buttons
    this.left.addEventListener("click", () => {
      // animate using GSAP fade in
      TweenMax.fromTo(
        this.images,
        1.5,
        {
          opacity: 0
        },
        {
          opacity: 1
        }
      );

      // call the left button method
      this.selectLeft();
    });
    this.right.addEventListener("click", () => {
      // animate using GSAP fade in
      TweenMax.fromTo(
        this.images,
        1.5,
        {
          opacity: 0
        },
        {
          opacity: 1
        }
      );

      // call the right button method
      this.selectRight();
    });
  }

  selectLeft() {
    // hide the current image
    this.images[this.carouselIndex].style.display = "none";

    // if index is less than or equal to 0, set index to length of img array
    if (this.carouselIndex <= 0) {
      this.carouselIndex = this.images.length;
    }

    // decrease the index when used
    this.carouselIndex--;

    // display the image the index is on now
    this.images[this.carouselIndex].style.display = "flex";
  }

  selectRight() {
    // hide the current image
    this.images[this.carouselIndex].style.display = "none";

    // if index is greater than or equal to imgs length,
    // set index back to 1
    if (this.carouselIndex >= this.images.length - 1) {
      this.carouselIndex = -1;
    }

    // increase the index when used
    this.carouselIndex++;

    // display the image the index is on now
    this.images[this.carouselIndex].style.display = "flex";
  }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
