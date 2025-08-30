exports.calculateScore = (content) => {
  let score = Math.floor(Math.random() * 100);
  let color = "green";

  if (score < 40) color = "red";
  else if (score < 70) color = "yellow";

  return { score, color };
};
