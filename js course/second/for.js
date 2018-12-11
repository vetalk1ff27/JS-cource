for (var i =0; i <= 100500; i++) {
    if (i == 3 || i == 7) {
        continue;
    }
    console.log(i);
    if (i >= 10) {
        break;
    }
    console.log(i + ' after break');
}

//console.log(i); // var - i = 11, let i - не существует


