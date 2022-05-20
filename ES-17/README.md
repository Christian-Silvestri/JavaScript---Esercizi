# Closure - Exercise 4
Implementare la funzione `calculate` che restituisce un oggetto che dia la possibilità di eseguire le quattro operazioni matematiche (somma, sottrazione, moltiplicazione e divisione) su uno stesso numero e infine consente di stamparne il risultato.

**TIP**: Per concatenare i metodi basta restituire il riferimento all'oggetto stesso (`$this`)

Esempio:
```
calculator
  .add(2) // 2
  .add(4) // 6
  .multiply(3) // 18
  .sub(1) // 17
  .sub(3) // 14
  .divide(2) // 7
  .printResult();
```

Utilizza una variabile di appoggio, la quale aggiornerai dopo ogni operazione, inoltre la `outerFunction` dovrà restituire un oggetto con all'interno le funzioni per ogni operazione.