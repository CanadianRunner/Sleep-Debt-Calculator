const getSleepHours = day => {

  switch(day) {
    case 'Monday':
    return 8
    break;
    case 'Tuesday':
    return 5
    break;
    case 'Wednesday':
    return 6
    break;
    case 'Thursday':
    return 8
    break;
    case 'Friday':
    return 6
    break;
    case 'Saturday':
    return 8
    break;
    case 'Sunday':
    return 4
    break;
    
    default:
    return 'Please enter a day of the week!'
  }
  };
  
  const getActualSleepHours = () =>  
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  
  
  console.log(getSleepHours('Wednesday'));
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours =
    getActualSleepHours();
    const idealSleepHours =
    getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours)
    {
      console.log('You are getting enough sleep');
      else if (actualSleepHours > idealSleepHours) {
        console.log("You've got more sleep than needed.");
      }
      else if (actualSleepHours < idealSleepHours){
        console.log("Ypu should get some rest.")
      }
      else {
        console.log("Error!  Check your code.")
      }
  };
  
  calculateSleepDebt();
  
  
  