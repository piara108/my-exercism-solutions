// Exercise: Protein Translation

export const translate = (protein = '') => {
  const codons = {
    'AUG': 'Methionine', 'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
    'UUA': 'Leucine',    'UUG': 'Leucine',       'UCU': 'Serine',
    'UCC': 'Serine',     'UCA': 'Serine',        'UCG': 'Serine',
    'UAU': 'Tyrosine',   'UAC': 'Tyrosine',      'UGU': 'Cysteine',
    'UGC': 'Cysteine',   'UGG': 'Tryptophan',    'UAA': 'STOP',
    'UAG': 'STOP',       'UGA': 'STOP',
  };

  if (protein.length === 0) { return [] }

  const rnaFrags = protein.match(/.{1,3}/g);
  let proteinCodons = [];

  rnaFrags.some(cd => {
    const cdn = codons[cd];

    if (cdn === 'STOP') { return proteinCodons }
    else if (cdn === undefined) { throw new Error('Invalid codon') }
    else { proteinCodons.push(cdn) }
  });

  return proteinCodons;
};
