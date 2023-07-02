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

  new Glide('.glide2',{
    type: 'carousel',
    startAt: 0,
    perView: 4,
    breakpoints: {
      769: {
        perView: 2,
      }
    },
  }).mount()

  new Glide('.glide3',{
    type: 'carousel',
    startAt: 0,
    perView: 1,
    animationDuration: 500, // Kaydırma animasyonunun süresi (ms)
    animationTimingFunc: "linear", // Kaydırma animasyonunun zamanlama fonksiyonu
    rewind: false, // Son slayta gelindiğinde kaydırmayı geri sarma
    focusAt: "center",
  }).mount()

  new Glide('.glide4',{
    type: 'carousel',
    startAt: 0,
    perView: 2,
    gap: 0,
    breakpoints: {
      769: {
        perView: 2,
      }
    },
  }).mount()

