// Exercise Name: Nucleotide Count

export class NucleotideCounts {
  static parse(strand) {
    let nucleoCount = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };

    strand.split('').map(function(nt) {
      if (!(nt in nucleoCount)) throw new Error('Invalid nucleotide in strand');
      
      nucleoCount[nt] += 1
    });

    return `${nucleoCount['A']} ${nucleoCount['C']} ${nucleoCount['G']} ${nucleoCount['T']}`;
  }
}
