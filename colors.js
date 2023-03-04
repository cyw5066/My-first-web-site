var links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     console.log(alist[i]);
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css( "color", color);
    }
}
var body = {
    setColor:function (color){
        //document.querySelector('body').style.color = color;
        $('body').css( "color", color);
    },
    setBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css( "backgroundColor", color);
    },

}
function nightDayHandler(self){
    if (self.value === 'night') {
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'day';
        links.setColor('powderblue');
    }
    else {
        body.setBackgroundColor('white');
        body.setColor('black');
        self.value = 'night';
        links.setColor('blue');
    }          
}