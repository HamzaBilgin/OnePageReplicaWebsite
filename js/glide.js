new Glide('.glide',{
    type: 'carousel',
    startAt: 0,
    perView: 4,
    breakpoints: {
      769: {
        perView: 2,
      }
    },
  }).mount()