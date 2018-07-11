/*
* name;
*/
class Result extends ui.ResultUI{
    private playerList:Array<Player> = [];

    constructor(userList:Array<Player>, flag?:number){
        super();
        this.initView(userList);
    }

    private initView(userList:Array<Player>){

        this.btn_exit.on(Laya.Event.CLICK, this, this.btnExitClick);

        this.addPlayerList(userList);
        this.showInfo();
    }

    public addPlayerList(userList:Array<Player>){
        userList.forEach((p)=>{
            let user:Player = new Player();
            user.avatar = p.avatar;
            user.isOwner = p.isOwner;
            user.name = p.name;
            user.score = p.score;
            user.userID = p.userID;
            this.playerList.push(user);
        });
        this.scoreSort();
    }
    private scoreSort(){
        this.playerList.sort( function (a, b){
            return a.score > b.score ? -1 : 1;
        });
    }

    private showInfo(){
        for(let i = 0; i < this.playerList.length; i++){
            let name = this.playerList[i].name == "" ? this.playerList[i].userID: this.playerList[i].name;
            this["name_player"+i].text = name+" 分数["+this.playerList[i].score+"]";
            this["img_Player"+i].skin = this.playerList[i].avatar;
        }
    }

    private btnExitClick(e:Laya.Event){
        StageManage.getInstance.SwitchScreen(Lobby);
    }
}