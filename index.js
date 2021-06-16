function tabela() {
    let numero = window.document.getElementById('txtnumero').value

    document.write('<table class ="multiply" border = 1px>')
    document.write('<thead class = "multiply" > Tabuada </thead>')

    for (let count1 = 0; count1 < 1; count1++) {
        document.write('<tr>')
        document.write('<td background: lightblue> X </td>')
        for (let count2 = 0; count2 <= numero; count2++) {
            document.write('<td>' + count2 + '</td>')
        }
        document.write('</tr>')
    }
    for (let count1 = 0; count1 <= numero; count1++) {
        document.write('<tr>')
        document.write('<td>'+ count1 + '</td>')
        for (let count2 = 0; count2 <= numero; count2++) {
            document.write('<td>' + count2 * count1 + '</td>')
        }  
        document.write('</tr>')
    }
    document.write('</table>')
}