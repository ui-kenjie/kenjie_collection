jQuery(document).ready(function(){
    
    $("[animate]").contents().filter(function() {
        return this.nodeType == 3
    }).each(function(){
        this.data = this.data.replace(/ /g, '\u00a0');
    });

    addSpan()

    function addSpan() {
    var classCount = $("[animate]").length;

    for (z=0; z< classCount; z++) {
        var d=$('[animate]:eq('+z+')');
        var text=d.text();
        text=$.trim(text);
        d.empty();
                for(i=0; i<text.length;i++) {
                    var span = $("<span></span>");
                    span.text(text[i]);
                    d.append(span);
                }
        }
        headingAnimate();
    }


    function headingAnimate () {
        var classCount = $("[animate]").length;
        for (z=0; z<classCount; z++) {
            var classCount = $('[animate]:eq('+z+')').attr("animate");
            console.log(classCount);
            if (classCount = "skewY") {
                skewY();
            }
            if (classCount = "skewX") {
                skewX();
            }
            if (classCount = "rotateY") {
                rotateY();
            }
            if (classCount = "rotateX") {
                rotateX();
            }
            if (classCount = "rotate") {
                rotate();
            }
            if (classCount = "scaleX") {
                scaleX();
            }
            if (classCount = "scale3d") {
                scale3d();
            }
            if (classCount = "translateX") {
                translateX();
            }
            if (classCount = "color") {
                color();
            }
            if (classCount = "color") {
                textShadow();
            }
        }
    }

    var estTime = 30;

    var x = 1;
    function skewY() {
        var animatedHeadlineText = $("[animate=skewY]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=skewY]").attr("animate");                   
               if ( x <= estTime)  {
                    var animateSpan = $('[animate=skewY] span:nth-child(' + x + ')');
                    setTimeout(function(){
                        animateSpan.toggleClass("animate-" + animatedClass + "First");
                    }, 200);
                    skewY(); 
                    console.log(x);
                    x++;
               }
               else {
                   setTimeout(function(){
                    skewY(); 
                    }, 2500) 
                   return x = 0;
               }     
        }, 150)  
    }

    var skx = 0;
    function skewX() {
        var animatedHeadlineText = $("[animate=skewX]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=skewX]").attr("animate");                   
               if ( skx <= estTime)  {
                    var animateSpan = $('[animate=skewX] span:nth-child(' + skx + ')');
                    setTimeout(function(){
                        animateSpan.toggleClass("animate-" + animatedClass + "First");
                    }, 200);
                    skewX(); 
                    console.log(skx);
                    skx++;
               }
               else {
                   setTimeout(function(){
                    skewX(); 
                    }, 2500) 
                   return skx = 0;
               }     
        }, 150)  
    }


    var rty = 0;
    function rotateY() {
        var animatedHeadlineText = $("[animate=rotateY]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=rotateY]").attr("animate");                   
               if ( rty <= estTime)  {
                    var animateSpan = $('[animate=rotateY] span:nth-child(' + rty + ')');
                    setTimeout(function(){
                        animateSpan.toggleClass("animate-" + animatedClass + "First");
                    }, 200);
                    rotateY(); 
                    console.log(rty);
                    rty++;
               }
               else {
                   setTimeout(function(){
                    rotateY(); 
                    }, 2500) 
                   return rty = 0;
               }     
        }, 150)  
    }

    var rtx = 0;
    function rotateX() {
        var animatedHeadlineText = $("[animate=rotateX]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=rotateX]").attr("animate");                   
               if ( rte <= estTime)  {
                    var animateSpan = $('[animate=rotateX] span:nth-child(' + rtx + ')');
                    setTimeout(function(){
                        animateSpan.toggleClass("animate-" + animatedClass + "First");
                    }, 200);
                    rotateX(); 
                    console.log(rtx);
                    rtx++;
               }
               else {
                   setTimeout(function(){
                    rotateX(); 
                    }, 2500) 
                   return rtx = 0;
               }     
        }, 150)  
    }

    var rte = 0;
    function rotate() {
        var animatedHeadlineText = $("[animate=rotate]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=rotate]").attr("animate");                   
               if ( rte <= estTime)  {
                    var animateSpan = $('[animate=rotate] span:nth-child(' + rte + ')');
                    setTimeout(function(){
                        animateSpan.toggleClass("animate-" + animatedClass + "First");
                    }, 200);
                    rotate(); 
                    console.log(rte);
                    rte++;
               }
               else {
                   setTimeout(function(){
                    rotate(); 
                    }, 2500) 
                   return rte = 0;
               }     
        }, 150)  
    }

    var scx = 0;
    function scaleX() {
        var animatedHeadlineText = $("[animate=scaleX]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=scaleX]").attr("animate");  
                   
               if ( scx <= (estTime+1))  {
                    var animateSpan = $('[animate=scaleX] span:nth-child(' + scx + ')');
                    var animateSpanMin = $('[animate=scaleX] span:nth-child(' + (scx-1) + ')');
                    animateSpan.removeClass().addClass("animate-" + animatedClass + "First");
                    setTimeout(function(){
                        animateSpanMin.removeClass().addClass("animate-" + animatedClass + "Second");
                    }, 220);
                    scaleX(); 
                    console.log(scx);
                    scx++;
               }
               else {
                   setTimeout(function(){
                        scaleX(); 
                    }, 1800) 
                   return scx = 0;
               }     
        }, 100)  
    }

    var sc3d = 0;
    function scale3d() {
        var animatedHeadlineText = $("[animate=scale3d]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=scale3d]").attr("animate");  
                   
               if ( sc3d <= (estTime+1))  {
                    var animateSpan = $('[animate=scale3d] span:nth-child(' + sc3d + ')');
                    var animateSpanMin = $('[animate=scale3d] span:nth-child(' + (sc3d-1) + ')');
                    animateSpan.removeClass().addClass("animate-" + animatedClass + "First");
                    setTimeout(function(){
                        animateSpanMin.removeClass().addClass("animate-" + animatedClass + "Second");
                    }, 220);
                        scale3d(); 
                    console.log(sc3d);
                    sc3d++;
               }
               else {
                   setTimeout(function(){
                        scale3d(); 
                    }, 1800) 
                   return sc3d = 0;
               }     
        }, 100)  
    }


    var trx = 0;
    function translateX() {
        var animatedHeadlineText = $("[animate=translateX]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=translateX]").attr("animate");  
                   
               if ( trx <= (estTime+1))  {
                    var animateSpan = $('[animate=translateX] span:nth-child(' + trx + ')');
                    var animateSpanMin = $('[animate=translateX] span:nth-child(' + (trx-1) + ')');
                    animateSpan.removeClass().addClass("animate-" + animatedClass + "First");
                    setTimeout(function(){
                        animateSpanMin.removeClass().addClass("animate-" + animatedClass + "Second");
                    }, 220);
                    translateX(); 
                    console.log(trx);
                    trx++;
               }
               else {
                   setTimeout(function(){
                    translateX(); 
                    }, 1800) 
                   return trx = 0;
               }     
        }, 100)  
    }


    var clr = 0;
    function color() {
        var animatedHeadlineText = $("[animate=color]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=color]").attr("animate");  
                   
               if ( clr <= (estTime+1))  {
                    var animateSpan = $('[animate=color] span:nth-child(' + clr + ')');
                    var animateSpanMin = $('[animate=color] span:nth-child(' + (clr-1) + ')');
                    animateSpan.removeClass().addClass("animate-" + animatedClass + "First");
                    setTimeout(function(){
                        animateSpanMin.removeClass().addClass("animate-" + animatedClass + "Second");
                    }, 220);
                    color(); 
                    console.log(clr);
                    clr++;
               }
               else {
                   setTimeout(function(){
                    color(); 
                    }, 1800) 
                   return clr = 0;
               }     
        }, 100)  
    }

    var txs = 0;
    function textShadow() {
        var animatedHeadlineText = $("[animate=textShadow]").text();
        var animatedHeadlineTextLength = $.trim(animatedHeadlineText).length;
        setTimeout(function(){    
           var animatedClass = $("[animate=textShadow]").attr("animate");  
                   
               if ( txs <= (estTime+1))  {
                    var animateSpan = $('[animate=textShadow] span:nth-child(' + txs + ')');
                    var animateSpanMin = $('[animate=textShadow] span:nth-child(' + (txs-1) + ')');
                    animateSpan.removeClass().addClass("animate-" + animatedClass + "First");
                    setTimeout(function(){
                        animateSpanMin.removeClass().addClass("animate-" + animatedClass + "Second");
                    }, 220);
                    textShadow(); 
                    console.log(txs);
                    txs++;
               }
               else {
                   setTimeout(function(){
                    textShadow(); 
                    }, 1800) 
                   return txs = 0;
               }     
        }, 100)  
    }


});
