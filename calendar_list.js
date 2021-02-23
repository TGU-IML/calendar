//今日の日付
var today = new Date();
//今月の月末日を今日の日付から計算．
var endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
var endOfMonthDate = endOfMonth.getDate();
//曜日変換用配列
dayTable = [ '日', '月', '火', '水', '木', '金', '土'];
spaceTable = [']&nbsp;&nbsp;|' ,
']&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[',
 ']&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[',
  ']&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[',
   ']&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[',
    ']&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[',
     ']&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[']
var link_head = ' https://scrapbox.io/IML/'
//何周目かの初期値を入れるため，月初に設定
var weekNum = 0;
//書き込むドキュメントを開く
document.open();
//以下、日付と対応した書き込みを行う
//ループの中で毎回if文使うのはナンセンスな気がするので、月初めに確実に行う処理はループの外で記述

today.setDate(1);
document.write(
'[/ 　　　　　　　　'+today.getFullYear()+'/'+today.getMonth()+1
+']<br>'
+'|&nbsp;[[Mon]]&nbsp;|&nbsp;&nbsp;[[Tue]]&nbsp;|&nbsp;[[Wed]]&nbsp;|&nbsp;&nbsp;[[Thu]]&nbsp;|&nbsp;&nbsp;&nbsp;[[Fri]]&nbsp;&nbsp;|&nbsp;&nbsp;[[Sat]]&nbsp;&nbsp;|&nbsp;&nbsp;[[Sun]]&nbsp;|' + '<br>');

if(dayTable[today.getDay()] != '月'){
    var lastDay = new Date();
    lastDay.setDate(-((today.getDay + 6) % 7));
    var endOfLastMonthDate = new Date(lastDay.getFullYear(), lastDay.getMonth()+1, 0);;
    document.write('|   ');
    for(i = lastDay.getDate(); i <= endOfLastMonthDate; i++){
        lastDay.setDate(i);
        document.write(
            i + link_head + lastDay.getFullYear() + '/' + lastDay.getMonth() + '/'  + lastDay.getDate() + spaceTable[lastDay.getDay()]
        );
    }
}
document.close();