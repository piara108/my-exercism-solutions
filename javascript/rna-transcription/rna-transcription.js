// RNA Transcription

export const toRna = (strandRNA = '') => {
  const basePairs = { 'A': 'U', 'T': 'A', 'G': 'C', 'C': 'G' };

  let complementStrand = '';

  strandRNA.split('').map(function(am) { complementStrand += basePairs[am] });

  return complementStrand;
};
