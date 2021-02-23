//今日の日付
var today = new Date();
//今月の月末日を今日の日付から計算．
var endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
var endOfMonthDate = endOfMonth.getDate();
//曜日変換用配列
dayTable = [ '日', '月', '火', '水', '木', '金', '土'];
spaceTable = [']&nbsp;&nbsp;|<br>' ,
']&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;',
 ']&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;',
  ']&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;',
   ']&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;',
    ']&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;',
     ']&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;']
var link_head = '&nbsp;https://scrapbox.io/IML/'
//書き込むドキュメントを開く
document.open();
//以下、日付と対応した書き込みを行う
//ループの中で毎回if文使うのはナンセンスな気がするので、月初めに確実に行う処理はループの外で記述

today.setDate(1);
document.write(
'[/ 　　　　　　　'+today.getFullYear()+'/' + (today.getMonth() + 1)+']<br>'
+'|&nbsp;[[Mon]]&nbsp;|&nbsp;&nbsp;[[Tue]]&nbsp;|&nbsp;[[Wed]]&nbsp;|&nbsp;&nbsp;[[Thu]]&nbsp;|&nbsp;&nbsp;&nbsp;[[Fri]]&nbsp;&nbsp;|&nbsp;&nbsp;[[Sat]]&nbsp;&nbsp;|&nbsp;&nbsp;[[Sun]]&nbsp;|<br>');

if(dayTable[today.getDay()] != '月'){
    var lastDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    lastDay.setDate(1-((today.getDay() + 6) % 7));
    var endOfLastMonthDate = new Date(lastDay.getFullYear(),(lastDay.getMonth() + 1), 0).getDate();
    document.write('|&nbsp;&nbsp;&nbsp;');
    for(i = lastDay.getDate(); i <= endOfLastMonthDate; i++){
        lastDay.setDate(i);
        document.write(
            "["+ ("0" + i).slice(-2) + link_head + lastDay.getFullYear() + '/' + (lastDay.getMonth() + 1) + '/'  + lastDay.getDate() + spaceTable[lastDay.getDay()]
        );}
}
for(i=1; i<=endOfMonthDate;i++){
    today.setDate(i);
    if(dayTable[today.getDay()] == '月'){
        document.write('|&nbsp;&nbsp;&nbsp;');
    }
    document.write(
        "["+("0" + i).slice(-2) + link_head + today.getFullYear() + '/' + (today.getMonth() + 1) + '/'  + today.getDate() + spaceTable[today.getDay()]
        );
}
document.close();