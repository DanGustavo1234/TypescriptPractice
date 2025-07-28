import './style.css'

// import './topics/1-basic-types';
import './topics/2-object-interface';


const app=document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = `Hello TypeScript!`;

console.log('TypeScript is running!');