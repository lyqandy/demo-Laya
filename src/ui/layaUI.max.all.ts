
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BattleUI extends View {
		public img_battle:Laya.Image;
		public Sprite_player3:Laya.Sprite;
		public Sprite_player2:Laya.Sprite;
		public Sprite_player1:Laya.Sprite;
		public name_player2:Laya.Label;
		public name_player1:Laya.Label;
		public name_player3:Laya.Label;
		public img_ball:Laya.Image;
		public btn_leftMove:Laya.Button;
		public btn_rightMove:Laya.Button;
		public txt_gameTime:Laya.Label;
		public name_Player2:Laya.Label;
		public name_Player3:Laya.Label;
		public img_header1:Laya.Image;
		public name_Player1:Laya.Label;
		public img_header2:Laya.Image;
		public img_header3:Laya.Image;
		public score_Player1:Laya.Label;
		public score_Player2:Laya.Label;
		public score_Player3:Laya.Label;
		public btn_exit:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"height":640,"fillColor":"#41b5f6"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"var":"img_battle","height":640}},{"type":"Sprite","props":{"y":500,"x":540,"width":45,"var":"Sprite_player3","pivotY":37,"pivotX":22,"name":"Sprite_player3","height":72}},{"type":"Sprite","props":{"y":500,"x":578,"width":45,"var":"Sprite_player2","pivotY":37,"pivotX":22,"name":"Sprite_player2","height":72}},{"type":"Sprite","props":{"y":500,"x":615,"width":45,"var":"Sprite_player1","pivotY":37,"pivotX":22,"name":"Sprite_player1","height":72}},{"type":"Label","props":{"y":460,"x":572,"width":60,"var":"name_player2","pivotY":8,"pivotX":30,"name":"name_player2","height":18,"color":"#e3ec19","align":"center"}},{"type":"Label","props":{"y":460,"x":616,"width":60,"var":"name_player1","pivotY":8,"pivotX":30,"name":"name_player1","height":18,"color":"#e3ec19","align":"center"}},{"type":"Label","props":{"y":460,"x":534,"width":60,"var":"name_player3","pivotY":8,"pivotX":30,"name":"name_player3","height":16,"color":"#e3ec19","align":"center"}},{"type":"Image","props":{"y":510,"x":858,"width":40,"var":"img_ball","skin":"mvs/boll.png","scaleY":0.7,"scaleX":0.7,"pivotY":20,"pivotX":20,"height":42}},{"type":"Button","props":{"y":100,"x":1,"width":450,"var":"btn_leftMove","stateNum":1,"name":"btn_leftMove","height":470}},{"type":"Button","props":{"y":100,"x":684,"width":450,"var":"btn_rightMove","stateNum":1,"name":"btn_rightMove","height":470}},{"type":"Label","props":{"y":12,"x":522,"width":58,"var":"txt_gameTime","text":"60","height":29,"fontSize":30,"color":"#f6d285","align":"center"}},{"type":"Image","props":{"y":9,"x":33,"width":407,"skin":"mvs/itembg.png","scaleY":0.6,"scaleX":0.6,"height":43}},{"type":"Image","props":{"y":11,"x":854,"width":407,"skin":"mvs/itembg.png","scaleY":0.6,"scaleX":0.6,"height":43}},{"type":"Image","props":{"y":52,"x":854,"width":407,"skin":"mvs/itembg.png","scaleY":0.6,"scaleX":0.6,"height":43}},{"type":"Label","props":{"y":14,"x":933,"wordWrap":true,"width":150,"var":"name_Player2","text":"用户昵称","height":21,"fontSize":14,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":53,"x":933,"wordWrap":true,"width":150,"var":"name_Player3","text":"用户昵称","promptColor":"#816e6e","height":18,"fontSize":14,"color":"#ffffff","align":"right"}},{"type":"Image","props":{"y":-4,"x":-2,"width":44,"var":"img_header1","skin":"http://193.112.47.13/headimg/1.jpg","sizeGrid":"0,0,0,0","scaleY":1,"scaleX":1,"pivotX":-1,"height":48},"child":[{"type":"Sprite","props":{"y":39,"x":36,"width":33,"renderType":"mask","pivotY":23,"pivotX":26,"height":27},"child":[{"type":"Circle","props":{"y":8,"x":13,"radius":18,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Label","props":{"y":14,"x":46,"wordWrap":true,"width":150,"var":"name_Player1","text":"用户昵称","height":21,"fontSize":14,"color":"#171616","bold":false,"align":"left"}},{"type":"Image","props":{"y":1,"x":1085,"width":45,"var":"img_header2","skin":"http://193.112.47.13/headimg/2.jpg","sizeGrid":"0,0,0,0","scaleY":1,"scaleX":1,"pivotX":-1,"height":45},"child":[{"type":"Sprite","props":{"y":26,"x":23,"width":52,"renderType":"mask","pivotY":23,"pivotX":26,"height":47},"child":[{"type":"Circle","props":{"y":21,"x":26,"radius":18,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Image","props":{"y":40,"x":1085,"width":45,"var":"img_header3","skin":"http://193.112.47.13/headimg/3.jpg","sizeGrid":"0,0,0,0","scaleY":1,"scaleX":1,"pivotX":-1,"height":47},"child":[{"type":"Sprite","props":{"y":26,"x":22,"width":52,"renderType":"mask","pivotY":23,"pivotX":26,"height":47},"child":[{"type":"Circle","props":{"y":21,"x":26,"radius":18,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Label","props":{"y":15,"x":200,"wordWrap":true,"width":70,"var":"score_Player1","type":"number","text":"0","height":17,"fontSize":14,"color":"#060606","bold":false,"align":"left"}},{"type":"Label","props":{"y":16,"x":859,"wordWrap":true,"width":70,"var":"score_Player2","type":"number","text":"0","promptColor":"#998585","height":18,"fontSize":14,"color":"#ffffff","bold":false,"align":"right"}},{"type":"Label","props":{"y":54,"x":860,"wordWrap":true,"width":70,"var":"score_Player3","type":"number","text":"0","height":17,"fontSize":14,"color":"#ffffff","bold":false,"align":"right"}},{"type":"Button","props":{"y":588,"x":1073,"width":60,"var":"btn_exit","stateNum":1,"skin":"mvs/exit.png","height":48}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BattleUI.uiView);

        }

    }
}

module ui {
    export class LobbyUI extends View {
		public btn_randMatch:Laya.Button;
		public btn_joinWithProperty:Laya.Button;
		public btn_createRoom:Laya.Button;
		public btn_geRoomList:Laya.Button;
		public img_header:Laya.Image;
		public name_head:Laya.Label;
		public btn_exit:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640,"alpha":1},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"height":640,"fillColor":"#507278"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"visible":true,"skin":"mvs/bkg.png","height":640,"alpha":1}},{"type":"Button","props":{"y":179,"width":200,"var":"btn_randMatch","stateNum":1,"skin":"mvs/btnbg.png","sizeGrid":"5,5,5,5","name":"btn_randMatch","labelStrokeColor":"#c0d4d1","labelStroke":2,"labelSize":28,"labelBold":true,"label":"随机匹配","height":200,"centerX":-335,"alpha":1}},{"type":"Button","props":{"y":283,"width":200,"var":"btn_joinWithProperty","stateNum":1,"skin":"mvs/btnbg.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#c0d4d1","labelStroke":2,"labelSize":28,"labelBold":true,"label":"属性匹配","height":200,"centerX":-132,"alpha":1}},{"type":"Button","props":{"y":184,"width":200,"var":"btn_createRoom","stateNum":1,"skin":"mvs/btnbg.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#c0d4d1","labelStroke":2,"labelSize":28,"labelBold":true,"label":"创建房间","height":200,"centerX":81,"alpha":1}},{"type":"Button","props":{"y":275,"width":200,"var":"btn_geRoomList","stateNum":1,"skin":"mvs/btnbg.png","sizeGrid":"5,5,5,5","name":"btn_geRoomList","labelStrokeColor":"#c0d4d1","labelStroke":2,"labelSize":28,"labelBold":true,"label":"房间列表","height":200,"centerX":286}},{"type":"Image","props":{"y":574,"x":60,"width":298,"skin":"mvs/itembg.png","height":51}},{"type":"Image","props":{"y":556,"x":-3,"width":85,"var":"img_header","skin":"http://193.112.47.13/headimg/1.jpg","sizeGrid":"0,0,0,0","pivotX":-1,"height":90},"child":[{"type":"Sprite","props":{"y":23,"x":19,"width":77,"renderType":"mask","pivotY":23,"pivotX":26,"height":85},"child":[{"type":"Circle","props":{"y":42,"x":47,"radius":40,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Label","props":{"y":589,"x":83,"wordWrap":true,"width":255,"var":"name_head","text":"用户昵称","height":24,"fontSize":18,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":582,"x":1067,"var":"btn_exit","stateNum":1,"skin":"mvs/exit.png"}},{"type":"Label","props":{"y":50,"x":379,"width":400,"text":"游戏大厅","height":70,"fontSize":44,"font":"Microsoft YaHei","color":"#0b0b0b","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LobbyUI.uiView);

        }

    }
}

module ui {
    export class LoginUI extends View {
		public txtGameID:Laya.TextInput;
		public txtAppkey:Laya.TextInput;
		public txtSecretKey:Laya.TextInput;
		public btn_ok:Laya.Button;
		public radio_sel:Laya.RadioGroup;
		public btn_clear:Laya.Button;
		public btn_premise:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640,"alpha":1},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"height":640,"fillColor":"#0f444e"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"skin":"mvs/bkg.png","height":640}},{"type":"TextInput","props":{"y":141,"x":308,"wordWrap":true,"width":522,"var":"txtGameID","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"0-9","prompt":"请输入GameID","padding":"0","name":"txtGameID","height":54,"fontSize":20,"align":"left"}},{"type":"TextInput","props":{"y":200,"x":308,"wordWrap":true,"width":522,"var":"txtAppkey","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"a-zA-Z","prompt":"请输入AppKey","padding":"0","name":"txtAppkey","height":54,"fontSize":20,"align":"left"}},{"type":"TextInput","props":{"y":258,"x":308,"wordWrap":true,"width":522,"var":"txtSecretKey","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"a-zA-Z","prompt":"请输入SecretKay","padding":"0","name":"txtSecretKey","height":54,"fontSize":20,"color":"#000000","align":"left"}},{"type":"Image","props":{"y":575,"x":433,"skin":"mvs/footer_text.png"}},{"type":"Button","props":{"y":374,"width":222,"var":"btn_ok","stateNum":1,"skin":"mvs/btn1.png","sizeGrid":"5,5,5,5","name":"btn_ok","labelSize":28,"labelBold":true,"label":"确定","height":80,"centerX":0}},{"type":"Label","props":{"y":40,"x":369,"width":400,"text":"Matchvs-Demo","height":70,"fontSize":44,"font":"Microsoft YaHei","color":"#0b0b0b","bold":true,"align":"center"}},{"type":"RadioGroup","props":{"y":336,"x":465,"var":"radio_sel","selectedIndex":0},"child":[{"type":"Radio","props":{"y":0,"x":4,"width":110,"skin":"mvs/radio3.png","name":"item1","labelSize":22,"labelColors":"#010101","labelBold":true,"label":"release","height":32}},{"type":"Radio","props":{"y":0,"x":116,"width":97,"skin":"mvs/radio3.png","selected":true,"name":"item0","labelSize":22,"labelColors":"#010101","labelBold":true,"label":"alpha","height":30}}]},{"type":"Button","props":{"y":493,"x":553,"width":30,"var":"btn_clear","stateNum":1,"skin":"mvs/clear.png","name":"btn_clear","height":30}},{"type":"Button","props":{"y":578,"x":1074,"var":"btn_premise","stateNum":1,"skin":"mvs/premise.png","name":"btn_premise"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoginUI.uiView);

        }

    }
}

module ui {
    export class MatchUI extends View {
		public match_title:Laya.Label;
		public btn_cancel:Laya.Button;
		public loadMatch:Laya.Image;
		public img_OwnerFlag1:Laya.Image;
		public img_OwnerFlag2:Laya.Image;
		public img_OwnerFlag3:Laya.Image;
		public chk_FrameSysc:Laya.CheckBox;
		public img_Player1:Laya.Image;
		public img_Player2:Laya.Image;
		public img_Player3:Laya.Image;
		public name_Player1:Laya.Label;
		public name_Player2:Laya.Label;
		public name_Player3:Laya.Label;
		public btn_kick1:Laya.Button;
		public btn_kick2:Laya.Button;
		public btn_kick3:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"visible":true,"height":640,"alpha":1},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"height":640,"fillColor":"#86c074"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"skin":"mvs/bkg.png","height":640}},{"type":"Label","props":{"y":71,"width":503,"var":"match_title","text":"随机匹配中...","stroke":1,"height":37,"fontSize":28,"font":"Microsoft YaHei","color":"#000000","centerX":-1,"bold":false,"align":"center"}},{"type":"Button","props":{"y":525,"width":144,"var":"btn_cancel","stateNum":1,"skin":"mvs/btn1.png","name":"btn_cancel","labelSize":28,"labelFont":"SimHei","labelBold":true,"label":"取消","height":62,"centerX":0}},{"type":"Sprite","props":{"y":476,"x":566,"width":40,"pivotY":20,"pivotX":20,"height":40},"child":[{"type":"Image","props":{"y":20,"x":20,"width":40,"var":"loadMatch","skin":"mvs/loading.png","pivotY":20,"pivotX":20,"height":40}}]},{"type":"Image","props":{"y":171,"x":262,"visible":false,"var":"img_OwnerFlag1","skin":"mvs/home.png","name":"img_OwnerFlag1"}},{"type":"Image","props":{"y":171,"x":262,"visible":false,"var":"img_OwnerFlag2","skin":"mvs/home.png","name":"img_OwnerFlag2"}},{"type":"Image","props":{"y":171,"x":262,"visible":false,"var":"img_OwnerFlag3","skin":"mvs/home.png","name":"img_OwnerFlag3"}},{"type":"CheckBox","props":{"y":198,"x":843,"width":117,"visible":false,"var":"chk_FrameSysc","skin":"mvs/select.png","name":"chk_FrameSysc","labelSize":28,"labelFont":"Arial","labelColors":"#080808","labelBold":true,"label":"打开帧同步","height":35}},{"type":"Panel","props":{"y":152,"x":329,"width":504,"height":273},"child":[{"type":"Image","props":{"y":12,"width":500,"visible":true,"skin":"mvs/itembg.png","height":80}},{"type":"Image","props":{"x":1,"width":100,"var":"img_Player1","skin":"http://193.112.47.13/headimg/1.jpg","sizeGrid":"0,0,0,0","pivotX":-1,"name":"img_Player1","height":100},"child":[{"type":"Sprite","props":{"y":57,"x":56,"width":92,"renderType":"mask","pivotY":40,"pivotX":52,"height":84},"child":[{"type":"Circle","props":{"y":35,"x":43,"radius":40,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Image","props":{"y":100,"width":500,"visible":true,"skin":"mvs/itembg.png","height":80}},{"type":"Image","props":{"y":88,"x":4,"width":100,"var":"img_Player2","skin":"http://193.112.47.13/headimg/1.jpg","sizeGrid":"0,0,0,0","pivotX":-1,"name":"img_Player2","height":100},"child":[{"type":"Sprite","props":{"y":49,"x":58,"width":92,"renderType":"mask","pivotY":40,"pivotX":52,"height":84},"child":[{"type":"Circle","props":{"y":43,"x":42,"radius":40,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Image","props":{"y":188,"width":500,"visible":true,"skin":"mvs/itembg.png","height":80}},{"type":"Image","props":{"y":175,"x":5,"width":104,"var":"img_Player3","skin":"http://193.112.47.13/headimg/1.jpg","sizeGrid":"0,0,0,0","pivotX":-1,"name":"img_Player3","height":97},"child":[{"type":"Sprite","props":{"y":57,"x":53,"width":92,"renderType":"mask","pivotY":40,"pivotX":52,"height":84},"child":[{"type":"Circle","props":{"y":36,"x":46,"radius":40,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Label","props":{"y":40,"x":111,"width":259,"var":"name_Player1","text":"用户1","height":27,"fontSize":18,"color":"#060606","align":"center"}},{"type":"Label","props":{"y":129,"x":111,"width":258,"var":"name_Player2","text":"用户2","height":25,"fontSize":18,"color":"#010101","align":"center"}},{"type":"Label","props":{"y":214,"x":111,"width":256,"var":"name_Player3","text":"用户3","height":26,"fontSize":18,"color":"#0b0b0b","align":"center"}},{"type":"Button","props":{"y":55,"x":436,"width":100,"visible":false,"var":"btn_kick1","stateNum":1,"skin":"mvs/btn7.png","pivotY":20,"pivotX":50,"name":"btn_kick1","labelSize":22,"labelColors":"#090a09","labelBold":true,"label":"踢掉","height":40}},{"type":"Button","props":{"y":143,"x":438,"width":100,"visible":false,"var":"btn_kick2","stateNum":1,"skin":"mvs/btn7.png","pivotY":20,"pivotX":50,"name":"btn_kick2","labelSize":22,"labelColors":"#090a09","labelBold":true,"label":"踢掉","height":40}},{"type":"Button","props":{"y":228,"x":440,"width":100,"visible":false,"var":"btn_kick3","stateNum":1,"skin":"mvs/btn7.png","pivotY":20,"pivotX":50,"name":"btn_kick3","labelSize":22,"labelColors":"#090a09","labelBold":true,"label":"踢掉","height":40}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.MatchUI.uiView);

        }

    }
}

module ui {
    export class MatchProUI extends View {
		public btn_ok:Laya.Button;
		public btn_exit:Laya.Button;
		public radio_groupMap:Laya.RadioGroup;
		public item0:Laya.Radio;
		public item1:Laya.Radio;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1136,"height":640},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"height":640,"fillColor":"#86c074"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"skin":"mvs/bkg.png","height":640}},{"type":"Image","props":{"y":143,"width":600,"skin":"mvs/note.png","height":400,"centerX":0}},{"type":"Button","props":{"y":413,"width":134,"var":"btn_ok","stateNum":1,"skin":"mvs/btn1.png","labelSize":22,"labelBold":true,"label":"确定","height":54,"centerX":0}},{"type":"Label","props":{"y":176,"x":10,"width":503,"text":"属性匹配","stroke":1,"height":37,"fontSize":28,"font":"Microsoft YaHei","color":"#000000","centerX":0,"bold":false,"align":"center"}},{"type":"Button","props":{"y":475,"x":797,"var":"btn_exit","stateNum":1,"skin":"mvs/exit.png"}},{"type":"RadioGroup","props":{"y":306,"var":"radio_groupMap","selectedIndex":0,"centerX":0},"child":[{"type":"Radio","props":{"var":"item0","skin":"mvs/radio3.png","name":"item0","labelSize":28,"label":"地图A"}},{"type":"Radio","props":{"x":177,"var":"item1","skin":"mvs/radio3.png","name":"item1","labelSize":28,"label":"地图B"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.MatchProUI.uiView);

        }

    }
}

module ui {
    export class PremiseUI extends View {
		public txt_secretKey:Laya.TextInput;
		public txt_userID:Laya.TextInput;
		public txt_appKey:Laya.TextInput;
		public txt_gameID:Laya.TextInput;
		public txt_endPoint:Laya.TextInput;
		public txt_token:Laya.TextInput;
		public btn_ok:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"height":640,"fillColor":"#0f444e"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"skin":"mvs/bkg.png","height":640}},{"type":"TextInput","props":{"y":296,"x":307,"wordWrap":true,"width":522,"var":"txt_secretKey","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"a-zA-Z","prompt":"请输入secretKey","padding":"0","name":"txt_secretKey","height":54,"fontSize":20,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":355,"x":307,"wordWrap":true,"width":522,"var":"txt_userID","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"a-zA-Z","prompt":"请输入userID","padding":"0","name":"txt_userID","height":54,"fontSize":20,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":238,"x":307,"wordWrap":true,"width":522,"var":"txt_appKey","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"a-zA-Z","prompt":"请输入appKey","padding":"0","name":"txt_appKey","height":54,"fontSize":20,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":179,"x":307,"wordWrap":true,"width":522,"var":"txt_gameID","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"a-zA-Z","prompt":"请输入gameID","padding":"0","name":"txt_gameID","height":54,"fontSize":20,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":121,"x":307,"wordWrap":true,"width":522,"var":"txt_endPoint","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"a-zA-Z","prompt":"请输入服务地址","padding":"0","name":"txt_endPoint","height":54,"fontSize":20,"color":"#000000","align":"left"}},{"type":"TextInput","props":{"y":413,"x":307,"wordWrap":true,"width":522,"var":"txt_token","skin":"mvs/inputBox.png","sizeGrid":"2,2,2,2","rotation":0,"restrict":"a-zA-Z","prompt":"请输入token","padding":"0","name":"txt_token","height":54,"fontSize":20,"color":"#000000","align":"left"}},{"type":"Button","props":{"y":516,"width":146,"var":"btn_ok","stateNum":1,"skin":"mvs/btn1.png","sizeGrid":"5,5,5,5","name":"btn_ok","labelSize":28,"labelBold":true,"label":"确定","height":58,"centerX":0}},{"type":"Button","props":{"y":595,"x":1080,"stateNum":1,"skin":"mvs/exit.png"}},{"type":"Label","props":{"y":50,"x":341,"width":454,"text":"Matchvs服务独立部署","height":70,"fontSize":44,"font":"Microsoft YaHei","color":"#0b0b0b","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PremiseUI.uiView);

        }

    }
}

module ui {
    export class ReConnectUI extends View {
		public btn_cancel:Laya.Button;
		public txt_message:Laya.Label;
		public btn_ok:Laya.Button;
		public img_loading:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1136,"visible":true,"height":640},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"height":640,"fillColor":"#ced26c"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"skin":"mvs/bkg.png","height":640}},{"type":"Button","props":{"y":462,"x":708,"width":119,"var":"btn_cancel","stateNum":1,"skin":"mvs/btn7.png","pivotX":61,"name":"btn_cancel","labelSize":20,"labelFont":"Microsoft YaHei","labelColors":"#000000","labelBold":true,"label":"取消","height":39}},{"type":"Label","props":{"width":492,"var":"txt_message","text":"检测到您上一局游戏还没结束，是否重连？","name":"txt_message","height":29,"fontSize":22,"color":"#000000","centerY":-100,"centerX":0,"bold":true,"align":"center"}},{"type":"Button","props":{"y":462,"x":370,"width":119,"var":"btn_ok","stateNum":1,"skin":"mvs/btn7.png","name":"btn_ok","labelSize":20,"labelFont":"Microsoft YaHei","labelColors":"#000000","labelBold":true,"label":"确定","height":39}},{"type":"Sprite","props":{"y":333,"x":568,"width":40,"visible":false,"var":"img_loading","pivotY":20,"pivotX":20,"name":"img_loading","height":40},"child":[{"type":"Image","props":{"y":20,"x":20,"width":40,"skin":"mvs/loading.png","pivotY":20,"pivotX":20,"height":40}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ReConnectUI.uiView);

        }

    }
}

module ui {
    export class ResultUI extends View {
		public img_Player0:Laya.Image;
		public name_player0:Laya.Label;
		public img_Player1:Laya.Image;
		public name_player1:Laya.Label;
		public img_Player2:Laya.Image;
		public name_player2:Laya.Label;
		public btn_exit:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"staticCache":false,"height":640},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"lineColor":"#f1eeee","height":640,"fillColor":"#8dab84"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"skin":"mvs/bkg.png","height":640}},{"type":"Image","props":{"y":132,"width":600,"skin":"mvs/note.png","height":388,"centerX":0}},{"type":"Panel","props":{"y":224,"width":421,"height":253,"centerX":0},"child":[{"type":"Image","props":{"y":3,"width":417,"visible":true,"skin":"mvs/itembg.png","sizeGrid":"5,5,5,5","height":80}},{"type":"Image","props":{"x":8,"width":87,"var":"img_Player0","skin":"http://193.112.47.13/headimg/1.jpg","sizeGrid":"0,0,0,0","pivotX":-1,"name":"img_Player0","height":85},"child":[{"type":"Sprite","props":{"y":8,"x":-1,"width":88,"renderType":"mask","height":76},"child":[{"type":"Circle","props":{"y":35,"x":43,"radius":40,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Label","props":{"y":33,"x":103,"width":300,"var":"name_player0","text":"用户1","name":"name_player0","height":24,"fontSize":18,"color":"#060606","align":"center"}},{"type":"Image","props":{"y":85,"width":417,"visible":true,"skin":"mvs/itembg.png","sizeGrid":"5,5,5,5","height":80}},{"type":"Image","props":{"y":82,"x":8,"width":87,"var":"img_Player1","skin":"http://193.112.47.13/headimg/1.jpg","sizeGrid":"0,0,0,0","pivotX":-1,"name":"img_Player1","height":85},"child":[{"type":"Sprite","props":{"y":8,"x":-1,"width":88,"renderType":"mask","height":76},"child":[{"type":"Circle","props":{"y":35,"x":43,"radius":40,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Label","props":{"y":115,"x":103,"width":300,"var":"name_player1","text":"用户1","name":"name_player1","height":25,"fontSize":18,"color":"#060606","align":"center"}},{"type":"Image","props":{"y":168,"width":417,"visible":true,"skin":"mvs/itembg.png","sizeGrid":"5,5,5,5","height":80}},{"type":"Image","props":{"y":165,"x":8,"width":87,"var":"img_Player2","skin":"http://193.112.47.13/headimg/1.jpg","sizeGrid":"0,0,0,0","pivotX":-1,"name":"img_Player2","height":85},"child":[{"type":"Sprite","props":{"y":8,"x":-1,"width":88,"renderType":"mask","height":76},"child":[{"type":"Circle","props":{"y":35,"x":43,"radius":40,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Label","props":{"y":198,"x":103,"width":300,"var":"name_player2","text":"用户1","name":"name_player2","height":24,"fontSize":18,"color":"#060606","align":"center"}}]},{"type":"Button","props":{"y":579,"x":1063,"var":"btn_exit","stateNum":1,"skin":"mvs/exit.png"}},{"type":"Label","props":{"y":166,"width":503,"text":"结算","stroke":1,"height":37,"fontSize":28,"font":"Microsoft YaHei","color":"#000000","centerX":0,"bold":false,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ResultUI.uiView);

        }

    }
}

module ui {
    export class RoomListUI extends View {
		public btn_exit:Laya.Button;
		public txt_title:Laya.Label;
		public list_roomItems:Laya.List;
		public btn_entRoom:Laya.Button;
		public txt_roomID:Laya.Label;
		public txt_otherInfo:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1136,"lineWidth":1,"height":640,"fillColor":"#579564"}},{"type":"Image","props":{"y":0,"x":0,"width":1136,"skin":"mvs/bkg.png","height":640}},{"type":"Button","props":{"y":577,"x":1062,"var":"btn_exit","stateNum":1,"skin":"mvs/exit.png"}},{"type":"Label","props":{"y":45,"width":400,"var":"txt_title","text":"房间列表","name":"txt_title","height":70,"fontSize":44,"font":"Microsoft YaHei","color":"#0a1c27","centerX":0,"bold":true,"align":"center"}},{"type":"List","props":{"width":459,"var":"list_roomItems","renderType":"render","name":"list_roomItems","height":341,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"x":1,"width":452,"skin":"mvs/note.png","pivotX":1,"height":113}},{"type":"Button","props":{"y":73,"x":382,"width":100,"var":"btn_entRoom","stateNum":1,"skin":"mvs/btn7.png","pivotY":23,"pivotX":52,"name":"btn_entRoom","labelStrokeColor":"#050505","labelSize":18,"labelPadding":"0","labelFont":"Microsoft YaHei","labelColors":"#000000","label":"进入","height":42}},{"type":"Label","props":{"y":14,"x":75,"width":292,"var":"txt_roomID","text":"999999999999999999999","name":"txt_roomID","height":22,"fontSize":22,"color":"#060606","borderColor":"#f6f6f6","align":"center"}},{"type":"Label","props":{"y":42,"x":41,"wordWrap":true,"width":249,"var":"txt_otherInfo","valign":"middle","text":"label","name":"txt_otherInfo","height":57,"fontSize":14,"color":"#030303"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoomListUI.uiView);

        }

    }
}

module ui {
    export class WarningUI extends View {
		public txt_Message:Laya.Label;
		public btn_Return:Laya.Button;
		public txt_title:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":1136,"height":640,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1135,"lineWidth":1,"lineColor":"#9f9a9a","height":639,"fillColor":"#4a3838"}}]},{"type":"Image","props":{"width":700,"skin":"mvs/note.png","height":400,"centerY":0,"centerX":0}},{"type":"Label","props":{"x":364,"wordWrap":true,"width":408,"var":"txt_Message","valign":"middle","text":"label","name":"txt_Message","height":170,"fontSize":18,"font":"Microsoft YaHei","color":"#030303","centerY":0,"centerX":0,"bold":false,"align":"center"}},{"type":"Button","props":{"y":441,"width":122,"var":"btn_Return","stateNum":1,"skin":"mvs/btn7.png","name":"btn_Return","labelSize":18,"labelColors":"000000","labelBold":true,"label":"返回","height":44,"centerX":0}},{"type":"Label","props":{"y":150,"width":105,"var":"txt_title","text":"提示 ！","strokeColor":"#8c9c8e","stroke":5,"name":"txt_title","height":37,"fontSize":36,"color":"#000000","centerX":0,"bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WarningUI.uiView);

        }

    }
}
