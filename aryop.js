(function() {
    'use strict'

    var team = ["佐藤","鈴木","田中","岸田","有森"];
    console.log(team);
    console.log("チームは" + team.length + "人です。");
    console.log();

    console.log("*** 追加 ***");
    team.push("田川");
    console.log(team);
    console.log("チームは" + team.length + "人です。");
    console.log();

    console.log("*** 変更 ***");
    team[0] = "後藤";
    console.log(team);
    console.log("チームは" + team.length + "人です。");
    console.log();

    console.log("*** 削除 ***");
    team.splice(2, 1);
    console.log(team);
    console.log("チームは" + team.length + "人です。");

})();
