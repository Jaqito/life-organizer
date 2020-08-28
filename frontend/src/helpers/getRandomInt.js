export default function getRandomInt(min, max) {
  if(!max){
    console.warn(`No Maximum Value Passed For Random Integer`)
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
