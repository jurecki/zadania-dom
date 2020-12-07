//1. Znajdź elementy o klasie `.first-attempt` - dodaj im klasę `.active`

const elements = document.querySelectorAll('.first-attempt');
[...elements].forEach(element => element.classList.add('active'));

//2. Znajdź elementy z atrybutem `data-border` i dodaj im atrybut `data-el-active`. 
//Wykorzystaj dataset i inny rodzaj pętli niż w 1 zadaniu

const elements2 = document.querySelectorAll('[data-border]')

for (const item of elements2) {
	item.setAttribute('data-el-active','')
}

//3. Znajdź elementy z klasą `.hack`. Dodaj im atrybut title ustawiony na wartość "hacking". 
//Atrybut ten nie powinien zaczynać się od `data-`

const elements3 = document.querySelectorAll('.hack');

[...elements3].forEach(element => element.setAttribute('title','hacking'))

//4. Znajdź elementy o klasie `.hijack`. Usuń im atrybut `title`
const elements4 = document.querySelectorAll('.hijack');

[...elements4].forEach(element => element.removeAttribute('title'))

//5. Znajdź elementy które mają 2 klasy równocześnie: `.st1` i `.st2`. 
// Dodaj im style: `color na red`, i `font-size na 15px`

const elements5 = document.querySelectorAll('.st1.st2');

[...elements5].forEach(element => element.setAttribute('style', 'color:red, font-size: 15px'))

//6. Znajdź elementy które mają klasę `.attrib`. Dodaj im atrybut `data-hack-active`, usuń atrybut `data-hack-inactive`

const elements6 = document.querySelectorAll('.attrib');
[...elements6].forEach(element => {
	element.removeAttribute('data-hack-inactive');
	element.setAttribute('data-hack-active',"");
})

//7. Znajdź elementy o klasie `.last-attempt` i ukryj (nie usuwaj) w ich wnętrzu spany

const elements7 = document.querySelectorAll('.last-attempt span');

[...elements7].forEach(element => element.setAttribute('style', 'opacity:0') )