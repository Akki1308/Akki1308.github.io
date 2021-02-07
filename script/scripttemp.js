const tl = new TimelineMax();

const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

tl
  .staggerFrom(".container1", 1, ideaTextTrans, 1.2)
  