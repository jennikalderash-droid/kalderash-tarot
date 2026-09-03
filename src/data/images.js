import mesaTarot from '../assets/images/mesa-tarot.jpg'
import praticaEspiritualHome from '../assets/images/pratica-espiritual-home.jpg'
import trabalhosEspirituais from '../assets/images/trabalhos-espirituais.jpg'
import sobreMim from '../assets/images/sobre-mim.jpg'

// Adicione fotos reais em src/assets/images e substitua null pelo caminho importado.
export const imageSlots = {
  hero: { src: praticaEspiritualHome, alt: 'Prática espiritual realizada à luz de velas', label: 'Imagem principal da marca' },
  homeDetail: { src: mesaTarot, alt: 'Mesa de jogo de tarot com cartas dispostas sobre tecido vermelho', label: 'Mesa de tarot' },
  about: { src: sobreMim, alt: 'Retrato da proprietária da Kalderash Tarot com adorno dourado e tecido azul', label: 'Fotografia pessoal' },
  tarot: { src: mesaTarot, alt: 'Mesa de jogo de tarot com cartas dispostas sobre tecido vermelho', label: 'Cartas ou mesa de tarot' },
  spiritual: { src: trabalhosEspirituais, alt: 'Prática espiritual realizada à luz de velas', label: 'Fotografia de trabalho realizado' },
  social: { src: null, alt: 'Trabalho em valor social realizado pela Kalderash Tarot', label: 'Fotografia de trabalho realizado' },
  other: { src: null, alt: 'Runas, matriz do destino ou material digital da Kalderash Tarot', label: 'Runas ou materiais digitais' },
}
