export function validateBik(bik) {
  let result = false;

  if (typeof bik === 'number') {
    bik = bik.toString();
  } else if (typeof bik !== 'string') {
    bik = '';
  }

  if (!bik.length) {
    return 'БИК пуст';
  } else if (/[^0-9]/.test(bik)) {
    return 'БИК может состоять только из цифр';
  } else if (bik.length !== 9) {
    return 'БИК может состоять только из 9 цифр';
  } else {
    result = true;
  }
  return result;
}

export function validateInn(inn) {
  let result = false;
  if (typeof inn === 'number') {
    inn = inn.toString();
  } else if (typeof inn !== 'string') {
    inn = '';
  }
  if (!inn.length) {
    return 'ИНН пуст';
  } else if (/[^0-9]/.test(inn)) {
    return 'ИНН может состоять только из цифр';
  } else if ([10, 12].indexOf(inn.length) === -1) {
    return 'ИНН может состоять только из 10 или 12 цифр';
  } else {
    let checkDigit = function (inn, coefficients) {
      let n = 0;
      for (let i in coefficients) {
        n += coefficients[i] * inn[i];
      }
      return parseInt(n % 11 % 10);
    };
    switch (inn.length) {
      case 10:
        let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if (n10 === parseInt(inn[9])) {
          result = true;
        }
        break;
      case 12:
        let n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        let n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
          result = true;
        }
        break;
    }
    if (!result) {
      return 'Неправильное контрольное число';
    }
  }
  return result;
}

export function validateKpp(kpp) {
  let result = false;
  if (typeof kpp === 'number') {
    kpp = kpp.toString();
  } else if (typeof kpp !== 'string') {
    kpp = '';
  }
  if (!kpp.length) {
    return 'КПП пуст';
  } else if (kpp.length !== 9) {
    return 'КПП может состоять только из 9 знаков (цифр или заглавных букв латинского алфавита от A до Z)';
  } else if (!/^[0-9]{4}[0-9A-Z]{2}[0-9]{3}$/.test(kpp)) {
    return 'Неправильный формат КПП';
  } else {
    result = true;
  }
  return result;
}

export function validateKs(ks, bik) {
  let result = false;
  if (validateBik(bik)) {
    if (typeof ks === 'number') {
      ks = ks.toString();
    } else if (typeof ks !== 'string') {
      ks = '';
    }
    if (!ks.length) {
      return 'К/С пуст';
    } else if (/[^0-9]/.test(ks)) {
      return 'К/С может состоять только из цифр';
    } else if (ks.length !== 20) {
      return 'К/С может состоять только из 20 цифр';
    } else {
      let bikKs = '0' + bik.toString().slice(4, 6) + ks;
      let checksum = 0;
      let coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
      for (let i in coefficients) {
        checksum += coefficients[i] * (bikKs[i] % 10);
      }
      if (checksum % 10 === 0) {
        result = true;
      } else {
        return 'Неправильное контрольное число';
      }
    }
  }
  return result;
}

export const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;