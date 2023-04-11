let words: string[]=[
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'EXTERNOCLEIDOMASTOIDEO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'Caleidoscopio',
    'Ovovivíparo',
    'Australopitecos',
    'Anticonstitucionalidad',
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