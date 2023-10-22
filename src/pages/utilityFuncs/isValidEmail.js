
export function isValidEmail(emailText) {
    // checks if an emali is valid by checking if it has a dot and if it has an @
    // return true for a valie email and false for an invalid email
    let atCount = 0;
    let dotCount = 0;
    for (let i = 0; i < emailText.length; i++) {
      let char = emailText[i];
      if (char === '@'){
        atCount++;
        for (let j = i+1; j < emailText.length; j++){
            char = emailText[j];
            if (char === '.'){
                dotCount++
            }
            if (char === '@'){
                return false;
            }
        }
        break
      }
    }

    return !(atCount !== 1 || dotCount === 0)
  };