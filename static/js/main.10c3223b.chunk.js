(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{20:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a,i,r,s,c,o,b,u,h,d,j=n(1),m=n.n(j),x=n(12),p=n.n(x),l=(n(20),n(4)),O=n(5),f=n(7),g=n(6),v=n(2),w=n(3),k=w.a.h1(a||(a=Object(v.a)(['\n    padding-top:30px;\n    text-align:center;\n    font-family:"notosans";\n    font-size:40px;\n']))),S=w.a.div(i||(i=Object(v.a)(["\n\n\n    width:720px; height:max-content;\n    margin :75px auto;\n    border : 2px solid #6c6c6c;\n    border-radius:4px;\n    padding-bottom:30px;\n"]))),y=w.a.h2(r||(r=Object(v.a)(['\n    padding-top:80px;\n    text-align:center;\n    font-family:"notosans";\n    font-size:20px;\n']))),C=n(0),F=function(t){Object(f.a)(n,t);var e=Object(g.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(O.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(k,{children:"\uc644\ubcbd\ud558\uac8c \ub9de\ub294 MBTI \ud14c\uc2a4\ud2b8"})})}}]),n}(m.a.Component),T=(n(24),w.a.div(s||(s=Object(v.a)(["\n    margin:10px auto;\n    margin-bottom:50px;\n    width:300px;\n    height:60px;\n    border:1px solid #cccccc;\n    border-radius:7px;\n    background-color:#fbffe0;\n    text-align:center;\n    color:#537af5;\n    font-size:35px;\n    cursor:pointer;\n    line-height:60px;\n\n    &:hover{\n        background-color:#c5e3b1;\n        color:#306880;\n    }\n"])))),z=function(t){Object(f.a)(n,t);var e=Object(g.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(O.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(T,{onClick:this.props.startbutton,children:"\uc2dc\uc791\ud558\uae30!"})})}}]),n}(m.a.Component),B=n.p+"static/media/good.c14d66fa.png",I=w.a.div(c||(c=Object(v.a)(["\n    width:max-content;\n    height:max-content;\n    margin:15px auto;\n"]))),J=function(t){Object(f.a)(n,t);var e=Object(g.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(O.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsxs)(y,{children:["\ub2f9\uc2e0\uc758 \uc131\uaca9\uc720\ud615\uc740 ",this.props.mbti," \uc785\ub2c8\ub2e4."]}),Object(C.jsx)(I,{children:Object(C.jsx)("img",{src:B,style:{width:"300px",height:"300px"}})}),Object(C.jsxs)(y,{children:["\ub098\uc640 \uac19\uc740 ",this.props.mbti," \uc720\ud615\uc744 \uac16\uace0 \uc788\ub294 \uc0ac\ub78c : ",this.props.who]})]})}}]),n}(m.a.Component),E=function(t){Object(f.a)(n,t);var e=Object(g.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={dot:"..",showresult:!1},a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.setState({showresult:!0})}),8e3),setTimeout((function(){t.setState({dot:t.state.dot+"."})}),2e3),setTimeout((function(){t.setState({dot:t.state.dot+"."})}),3e3),setTimeout((function(){t.setState({dot:t.state.dot+"."})}),4e3),setTimeout((function(){t.setState({dot:t.state.dot+"."})}),5e3),setTimeout((function(){t.setState({dot:t.state.dot+"."})}),6e3)}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[0==this.state.showresult?Object(C.jsxs)(y,{children:["\ub85c\ub529\uc911",this.state.dot]}):Object(C.jsx)(C.Fragment,{}),1==this.state.showresult?Object(C.jsx)(J,{mbti:this.props.mbti,who:this.props.who}):Object(C.jsx)(C.Fragment,{})]})}}]),n}(m.a.Component),M=w.a.div(o||(o=Object(v.a)(["\n    margin:0px auto;\n    margin-top:30px;\n    margin-bottom:10px;\n    width: 150px; height:50px;\n    background-color:#92e899;\n    border:1px solid #cccccc;\n    line-height:50px;\n    color:#f0fcfc;\n    text-align:center;\n    font-size:30px;\n    border-radius:5px;\n    cursor:pointer;\n\n    &:hover{\n        background-color:#92d1ad ;\n        color: #d5e3e3;\n    }\n"]))),N=w.a.div(b||(b=Object(v.a)(["\n    margin:0px auto;\n    width: 150px; height:50px;\n    background-color:#f9c8fa;\n    border:1px solid #cccccc;\n    line-height:50px;\n    color:#fffdf7;\n    text-align:center;\n    font-size:30px;\n    border-radius:5px;\n    cursor:pointer;\n\n    &:hover{\n        background-color:#e1bfe3 ;\n        color: #edebe4;\n    }\n"]))),P=w.a.h2(u||(u=Object(v.a)(['\n    padding-top:80px;\n    text-align:center;\n    font-family:"notosans";\n    font-size:20px;\n']))),D=function(t){Object(f.a)(n,t);var e=Object(g.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={mbti:"",number:1},a.asking=function(){return 1==a.state.number?"\ub2f9\uc2e0\uc740 \uc678\ud5a5\ud615(E) \uc785\ub2c8\uae4c \ub0b4\ud5a5\ud615(I) \uc785\ub2c8\uae4c?":2==a.state.number?"\ub2f9\uc2e0\uc740 \uac10\uac01\ud615(S) \uc785\ub2c8\uae4c \uc9c1\uad00\ud615(N) \uc785\ub2c8\uae4c?":3==a.state.number?"\ub2f9\uc2e0\uc740 \uc0ac\uace0\ud615(T) \uc785\ub2c8\uae4c \uac10\uc815\ud615(F) \uc785\ub2c8\uae4c?":4==a.state.number?"\ub2f9\uc2e0\uc740 \ud310\ub2e8\ud615(J) \uc785\ub2c8\uae4c \uc778\uc2dd\ud615(P)\uc785\ub2c8\uae4c?":void 0},a.answerBtn1=function(){return 1==a.state.number?"E":2==a.state.number?"S":3==a.state.number?"T":4==a.state.number?"J":void 0},a.answerBtn2=function(){return 1==a.state.number?"I":2==a.state.number?"N":3==a.state.number?"F":4==a.state.number?"P":void 0},a.clicked1=function(){1==a.state.number?a.setState({mbti:a.state.mbti+"E"}):2==a.state.number?a.setState({mbti:a.state.mbti+"S"}):3==a.state.number?a.setState({mbti:a.state.mbti+"T"}):4==a.state.number&&a.setState({mbti:a.state.mbti+"J"}),a.setState({number:a.state.number+1})},a.clicked2=function(){1==a.state.number?a.setState({mbti:a.state.mbti+"I"}):2==a.state.number?a.setState({mbti:a.state.mbti+"N"}):3==a.state.number?a.setState({mbti:a.state.mbti+"F"}):4==a.state.number&&a.setState({mbti:a.state.mbti+"P"}),a.setState({number:a.state.number+1})},a}return Object(O.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[this.state.number<5?Object(C.jsx)(P,{children:this.asking()}):Object(C.jsx)(C.Fragment,{}),this.state.number<5?Object(C.jsx)(M,{onClick:this.clicked1,children:this.answerBtn1()}):Object(C.jsx)(C.Fragment,{}),this.state.number<5?Object(C.jsx)(N,{onClick:this.clicked2,children:this.answerBtn2()}):Object(C.jsx)(C.Fragment,{}),5==this.state.number?Object(C.jsx)(E,{mbti:this.state.mbti,who:this.props.who}):Object(C.jsx)(C.Fragment,{})]})}}]),n}(m.a.Component),q=w.a.input(h||(h=Object(v.a)(["\n    text-align:center;\n    margin: 30px auto;\n    margin-top:55px;\n    width:250px;\n    height:40px;\n    font-size:20px;\n    line-height:30px;\n\n"]))),A=w.a.div(d||(d=Object(v.a)(["\n    width:max-content;\n    height:max-content;\n    margin:0 auto;\n"]))),G=function(t){Object(f.a)(n,t);var e=Object(g.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={isstart:!1,who:""},a.start=function(){a.setState({isstart:a.state.isstart=!0})},a}return Object(O.a)(n,[{key:"render",value:function(){var t=this;return Object(C.jsx)("div",{children:Object(C.jsxs)(S,{children:[Object(C.jsx)(F,{}),Object(C.jsx)(A,{children:this.state.isstart?Object(C.jsx)(C.Fragment,{}):Object(C.jsx)(q,{onChange:function(e){t.setState({who:e.target.value})},placeholder:"\ub2f9\uc2e0\uc758 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694."})}),this.state.isstart?Object(C.jsx)(D,{who:this.state.who}):Object(C.jsx)(z,{startbutton:this.start})]})})}}]),n}(m.a.Component);p.a.render(Object(C.jsx)(m.a.StrictMode,{children:Object(C.jsx)(G,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.10c3223b.chunk.js.map