/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-08 23:22:51
 * @version $Id$
 */

$(document).ready(function(){
    $('#fullPage').fullpage({
        verticalCentered: false,
        //sectionsColor: ['aqua','crimson','green','darkviolet'],
        anchors: ['page1','page2','page3','page4','page5'],
        navigation: true,
        navigationTooltips: ['他，终于来了','关于我','专业技能','技缘','联系我'],
        //滚动到某一屏后产生的动画效果
        afterLoad:function(link,index){
        	switch(index)
        	{
        		case 1:
        		move('.section1 h1').scale(1.5).end();
        		move('.section1 p').set('margin-top','5%').end();
        		break;
        		case 2:
        		move('.section2 h1').scale(0.7).end();
                move('.section2 .xian').set('width','200px').end();
                move('.section2 p').set('margin-top',"80px").end(function(){
                move('.section2 p').set('font-size','25px').end();
                });
        		break;
        		case 3:
        		move('.section3 h1').set('margin-left','20%').end(function(){
                    move('.section3 h1').scale(0.7).end();
                });
        		move('.section3 p').set('margin-left','20%').end();
                move('.section3 .xian3').set('width','130px').end();
                move('.section3 .skill').set('margin-top','60px').end();
        		break;
                case 4:
                move('.section4 h1').set('margin-top','200px').end(function(){
                    move('.section4 .xian4').set('width','130px').end();
                });
                
                move('.section4 .p1').set('margin-left','300px').end(function(){
                     move('.section4 .p2').set('margin-left','300px').end();
                });

                break;
        		case 5:
        		move('.section5 img.primary').rotate(360).end(function(){
        			move('.section5 img.sport').rotate(360).end();
        		})
                move('.section5 .xian5').set('width','130px').end();
                move('.section5 h1').scale(0.7).end();
                move('.section5 .left').set('margin-left','15px').end(function(){
                    move('.section5 .left').set('color','green').end(function(){
                        move('.section5 img.triangle1').rotate(360).end()
                    });
                });
                move('.section5 .right').set('margin-right','15px').end(function(){
                    move('.section5 .right').set('color','green').end(function(){
                        move('.section5 img.triangle2').rotate(360).end()
                    });
                });
        		break;
        		default:
        		break;

        	}
        },
        //页面离开的时候
        onLeave:function(link,index){
        	switch(index)
        	{
        		case 1:
        		move('.section1 h1').scale(1).end();
        		move('.section1 p').set('margin-top','800px').end();
        		break;
        		case 2:
        		move('.section2 h1').scale(1).end();
                move('.section2 .xian').set('width','80px').end();
                move('.section2 p').set('margin-top',"800px").end();


        		break;
        		case 3:
        		move('.section3 h1').set('margin-left','-1500px').end();
                move('.section3 h1').scale(1).end();
        		move('.section3 p').set('margin-left','1500px').end();
                move('.section3 .xian3').set('width','40px').end();
                move('.section3 .skill').set('margin-top','-600px').end();
        		break;
        		case 4:
                move('.section4 h1').set('margin-top','-2000px').end();
                move('.section4 .xian4').set('width','40px').end();
                move('.section4 .p1').set('margin-left','-1500px').end();
                move('.section4 .p2').set('margin-left','1500px').end();
        		break;
                case 5:
                move('.section5 img.primary').rotate(-360).end();
                move('.section5 img.sport').rotate(-360).end();
                move('.section5 .xian5').set('width','40px').end();
                move('.section5 h1').scale(1).end();
                move('.section5 .left').set('margin-left','-2500px').end();
                move('.section5 .right').set('margin-right','-2500px').end();
                move('.section5 .left').set('color','black').end();
                move('.section5 .right').set('color','black').end();
                move('.section5 img.triangle1').rotate(-360).end();
                move('.section5 img.triangle2').rotate(-360).end();
               
                break;
        		default:
        		break;

        	}
        },
        afterRender:function(){
         
        }
    })


});