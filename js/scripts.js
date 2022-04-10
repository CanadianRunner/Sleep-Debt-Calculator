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
  
  
  console.log(getSleepHours('Monday'));
  console.log(getActualSleepHours());
  
  
  
  