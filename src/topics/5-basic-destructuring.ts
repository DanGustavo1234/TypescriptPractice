

interface AuidioPlayer{
    audioVolume: number;
    audioDuration: number;
    song: string;
    details: Details;
}


interface Details{
    author: string;
    year: number;
}


const audioPlayer: AuidioPlayer = {
    audioVolume: 90,
    audioDuration: 300,
    song: 'Despacito',
    details: {
    author: 'Author Name',
    year: 2022
    }
}

// const {song:anothersong, audioDuration:songDuration,details} = audioPlayer;

// const{author}= details;

// console.log('Audio Player: ', anothersong);
// console.log('Audio Duration: ', songDuration);
// console.log('Author: ', author);

const [,,trunks='Not found']: string[] = ['Goku', 'Vegeta'];

console.log('Character 3: ', trunks);


export{}