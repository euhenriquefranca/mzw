const title = 'MZW – Método do Zero ao Win';
const description =
  'Neste curso você aprenderá toda a teoria vinculada às opções binárias, bem como utilização de ferramentas e corretoras e, por fim, terá acesso a análises gráficas junto a estratégias.';

const SEO = {
  title,
  description,
  canonical: 'https://mzw.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://mzw.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://mzw.vercel.app//mzw.png',
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  }
};

export default SEO;
