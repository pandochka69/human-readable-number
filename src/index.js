module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    const numStr = number.toString()
     if (numStr.length > 9) {
        console.log('To much');
    }
    
    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const reg = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/;

    const getNumBefore20 = (n) => a[Number(n)];
    const getNumAfter20 = (n) => b[n[0]] + ' ' + a[n[1]];

    const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(reg);
    let str = ''
    str += n1 != 0 ? (getNumBefore20(n1) || getNumAfter20(n1)) + 'crore ' : '';
    str += n2 != 0 ? (getNumBefore20(n2) || getNumAfter20(n2)) + 'lakh ' : '';
    str += n3 != 0 ? (getNumBefore20(n3) || getNumAfter20(n3)) + 'thousand ' : '';
    str += n4 != 0 ? getNumBefore20(n4) + 'hundred ' : '';
    str += n5 != 0 ? (getNumBefore20(n5) || getNumAfter20(n5)) : '';

    return str.trim();
}