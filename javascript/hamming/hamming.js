// Exercise Name: Hamming

export const compute = (strand1='', strand2='') => {
  let splitStr1 = strand1.split('');
  let splitStr2 = strand2.split('');
  let strandLength = strand1.length;
  let hammingDistance = 0;

  if (strand1.length === 0 && strand2.length === 0) {
    return hammingDistance;
  }
  else if (splitStr2.length === 0) {
    throw new Error('right strand must not be empty');
  }
  else if (splitStr1.length === 0) {
    throw new Error('left strand must not be empty');
  }
  else if (strand1.length != strand2.length) {
    throw new Error('left and right strands must be of equal length');
  }
  else {
    for (var x = 0; x < strandLength; x++) {
      if (splitStr1[x] != splitStr2[x]) { hammingDistance += 1 }
    }

    return hammingDistance;
  }
};
