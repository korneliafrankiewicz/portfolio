![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)



## Zadanie 1



### Ważne!
W zadaniach z tego tematu, **nie należy** używać metody `for`. Należy korzystać z metod tablicowych.

---

W pliku `js/app.js` znajdują się funkcje napisane w standardowy sposób. Twoim zadaniem jest przerobienie ich na **funkcje strzałkowe**, tak aby ich wywołania nie powodowały błędów.



## Zadanie 2



Napisz **funkcję strzałkową** `getSecondMaxNumber(array)`, która jako argument przyjmuje tablicę. 

Funkcja **ma zwrócić** drugą największą liczbę w tablicy.

Przykład:
```js
const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
```



## Zadanie 3



Napisz **funkcję strzałkową** `runInterval(n)`, która jako parametr (`n`) przyjmie liczbę całkowitą od `1 - 10`.

Zmienna `n` ma mieć domyślną wartość `8` w razie wywołania funkcji bez żadnej wartości. 

Wewnątrz funkcji uruchom interwał (`setInterval`) który ma wyświetlać napis "Hello" w konsoli co `500 ms`. 

Napis ten powinien pojawić się określoną ilość razy - ustaloną przez parametr przesłany do funkcji. 

Po osiągnięciu, np. 8 powtórzeń interwału, zostaje wyczyszczony.

Przykład:
```js
runInterval(3);

"Hello" // wait 500 ms
"Hello" // wait 500 ms
"Hello" 

// Clear Interval
```



## Zadanie 4



### Część 1
Dopisz funkcję ```generateLinks```, która na podstawie istniejącej tablicy z nazwami serwisów internetowych stworzy nową tablicę z linkami do tych stron.

Przykład:

Wejściowa tablica: `["google", "twitter", "facebook"]`  
Nowa tablica: `["https://google.com", "https://twitter.com", "https://facebook.com"]`

### Część 2
W metodzie `insertLinks()` wstaw wygenerowane adresy do listy o id `menu` w pliku `index.html`:

Przykład:
```html
<li><a href="https://google.com">https://google.com</a></li>
```

