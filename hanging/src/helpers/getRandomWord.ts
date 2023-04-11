let words: string[]=[
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'EXTERNOCLEIDOMASTOIDEO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'CALEIDOSCOPIO',
    'OVOVIPARO',
    'AUSTROLOPITECUS',
    'ANTICONSTITUCIONALIDAD',
    'PENDEJO',
    'MASTODONTE',
    'PLANTAR',
    'CUADRIPLEJIA',
    'WHATSAPP',
    'ESMERALDA',
    'BARRIL',
    'COCINA',
    'DETONADOR',
    'CUADRADO',
    'CEREMONIA',
    'EXTRACTOR',
    'CHUPETE',
    'RECITAL',
    'DELANTAL',
    'DESPEJADO',
    'FORTNITE',
    'WARZONE',
]



export function getRandomWord(){
 
   const randomIndex = Math.floor((Math.random() * words.length));

    return words[randomIndex];
}