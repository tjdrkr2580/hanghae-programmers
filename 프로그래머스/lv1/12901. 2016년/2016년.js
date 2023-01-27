function solution(a, b) {
    let month2016 = '0';
    if(parseInt(month2016) < 10)
        month2016 += String(a)
    else month2016 = a
    let date2016 = b;
    const date = new Date(2016, (month2016-1), date2016);   
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return week[date.getDay()]
}