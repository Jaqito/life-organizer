//returns the percentage change between two numbers
const calculatePercentageChange = (firstNumber, secondNumber) => {
  try {
    if(!firstNumber || !secondNumber){
      throw new Error('Did not get correct parameters, was expecting firstNumber and secondNumber')
    }
    const sign = firstNumber > secondNumber ? '' : '+'; //neg sign auto added
    return (sign + ((Number(secondNumber) - Number(firstNumber)) / Number(firstNumber) * 100).toFixed(2) + '%')
  } catch(e){
    console.error(e)
  }
};

export default calculatePercentageChange;