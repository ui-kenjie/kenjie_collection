jQuery(document).ready(function(){


        // THIS IS VARIABLE USED FOR THE CONTENT MODAL POPUP FOR TOOLTIP 
        var qTipModal = '<div class="qtip-modal">' +
        '<div class="content">'+
          '<p class="mb-1"></p>'+
          '<div class="qtip-modal-btn text-right">'+
            '<button class="btn btn-light mr-1" qtip-modal-btn="dismiss">Close</button>'+
            '<button class="btn btn-primary" qtip-modal-btn="next" help-qtip-btn>Next</button>'+
          '</div>'+
        '</div>'+
        '</div>';

        // HOVER ELEMENT TRIGGER HELP GUIDE TOOLTIP
        $('.qtip-hover [data-help-content]').mouseover(function() {
          $('.qtip-modal').remove();
          var qtipRight = $(this).parent().hasClass('qtip-right');
          var qtipLeft = $(this).parent().hasClass('qtip-left');
          var qtipTop = $(this).parent().hasClass('qtip-top');
          var qtipBottom = $(this).parent().hasClass('qtip-bottom');

          $(this).parent().prepend(qTipModal);
          $('.qtip-modal .qtip-modal-btn').hide();
          var qtipContent = $(this).attr('data-help-content');
          $('.qtip-modal .content p').text(qtipContent);
          var  qTipModalWidth = $('.qtip-modal').width();
          var  qTipModalHeight = $('.qtip-modal').height();
          
          switch (true) {
            case (true == qtipRight):
                $('.qtip-modal').css({
                  'right' : '-' + (parseInt(qTipModalWidth)+10) +'px'
                });
                break;
            case (true == qtipLeft):
                $('.qtip-modal').css({
                  'left' : '-' + (parseInt(qTipModalWidth)+10) +'px'
                });
                break;
            case (true == qtipTop):
                $('.qtip-modal').css({
                  'top' : '-' + (parseInt(qTipModalHeight)+15) +'px',
                  'left': '50%',
                  'transform': 'translate(-50%, 0)'
                });
                break;
            case (true == qtipBottom):
                $('.qtip-modal').css({
                  'bottom' : '-' + (parseInt(qTipModalHeight)+18) +'px',
                  'left': '50%',
                  'transform': 'translate(-50%, 0)'
                });
                break;
            default:
                $('.qtip-hover').addClass('qtip-default');
                $('.qtip-modal').css({
                  'top' : '-' + (parseInt(qTipModalHeight)+15) +'px',
                  'left': '50%',
                  'transform': 'translate(-50%, 0)'
                });
          }
        }); 
        $('.qtip-hover [data-help-content]').mouseout(function() {
          $(this).siblings('.qtip-modal').remove();
          $('.qtip-hover').removeClass('qtip-default');
          $('.qtip-modal .qtip-modal-btn').show();
        });
        // END OF HOVER FUNCTION FOR ELEMENT TRIGGER HELP GUIDE TOOLTIP

        //==========================================================================================

        // CLICK EVENT ELEMENT TRIGGER HELP GUIDE TOOLTIP
        $('.qtip-click [data-help-content]').click(function() {
          $('.qtip-modal').remove();
          
          var qtipRight = $(this).parent().hasClass('qtip-right');
          var qtipLeft = $(this).parent().hasClass('qtip-left');
          var qtipTop = $(this).parent().hasClass('qtip-top');
          var qtipBottom = $(this).parent().hasClass('qtip-bottom');

          if ( $(this).hasClass('qtip-active') == true ) {
            $(this).removeClass('qtip-active');
            $('.qtip-modal .qtip-modal-btn').show();
          }
          else if ( $(this).hasClass('qtip-active') != true ) {
            $(this).parent().prepend(qTipModal);
            $('.qtip-modal .qtip-modal-btn').hide();
            var qtipContent = $(this).attr('data-help-content');
            $('.qtip-modal .content p').text(qtipContent);
            var  qTipModalWidth = $('.qtip-modal').width();
            var  qTipModalHeight = $('.qtip-modal').height();
            $('.qtip-click [data-help-content]').removeClass('qtip-active');
            $(this).addClass('qtip-active');
            switch (true) {
              case (true == qtipRight):
                  $('.qtip-modal').css({
                    'right' : '-' + (parseInt(qTipModalWidth)+10) +'px'
                  });
                  break;
              case (true == qtipLeft):
                  $('.qtip-modal').css({
                    'left' : '-' + (parseInt(qTipModalWidth)+10) +'px'
                  });
                  break;
              case (true == qtipTop):
                  $('.qtip-modal').css({
                    'top' : '-' + (parseInt(qTipModalHeight)+15) +'px',
                    'left': '50%',
                    'transform': 'translate(-50%, 0)'
                  });
                  break;
              case (true == qtipBottom):
                  $('.qtip-modal').css({
                    'bottom' : '-' + (parseInt(qTipModalHeight)+18) +'px',
                    'left': '50%',
                    'transform': 'translate(-50%, 0)'
                  });
                  break;
              default:
                  $('.qtip-click').addClass('qtip-default');
                  $('.qtip-modal').css({
                    'top' : '-' + (parseInt(qTipModalHeight)+15) +'px',
                    'left': '50%',
                    'transform': 'translate(-50%, 0)'
                  });
            }
          }
          
        }); 
        // END OF CLICK EVENT FUNCTION FOR ELEMENT TRIGGER HELP GUIDE TOOLTIP


      
        //=========================================================================================

          $('[help-qtip-btn]').click(function() {
            $('.qtip-modal').remove();
            var helpQbtn= $(this).attr('help-qtip-btn');
            if (helpQbtn == '') {
              $(this).attr('help-qtip-btn','1');
            }
            var helpQtipStep= $(this).attr('help-qtip-btn');
            $('[qtip-guide-step="'+ helpQtipStep +'"]').append(qTipModal);
            $('.qtip-modal').prepend('<div class="bg-fixed"></div>');
            $('[help-qtip-btn]').attr('help-qtip-btn', helpQtipStep);
            qtip();
            qtipNext();
          });

          function qtipNext() {
          $('[qtip-modal-btn="next"]').click(function() {
            $('.qtip-modal').remove();
            var helpQbtn= $(this).attr('help-qtip-btn');
            if (helpQbtn == '') {
              $(this).attr('help-qtip-btn','1');
            }
            var helpQtipStep= $(this).attr('help-qtip-btn');
            $('[qtip-guide-step="'+ helpQtipStep +'"]').append(qTipModal);
            $('.qtip-modal').prepend('<div class="bg-fixed"></div>');
            $('[help-qtip-btn]').attr('help-qtip-btn', helpQtipStep);
            qtip();
            qtipNext();
          });
          }
          
    
        function qtip() {
          var helpQtipStep= $('[help-qtip-btn]').attr('help-qtip-btn');
          var helpQtipContent = $('[qtip-guide-step="'+ helpQtipStep +'"]').attr('qtip-guide')
          $('.qtip-modal .content p').text(helpQtipContent);
          $('.qtip-modal .content').addClass('left');

          $('.qtip-modal .content').css({
            'background-color': '#fff',
            'color': '#333'
          });
          var qTipWidth = $('.qtip-modal').width();
          $('.qtip-modal').css({
            'top': '30px',
            'left': - (qTipWidth +20)
          });


          var guideCount = $('[qtip-guide-step]').length;

          if (helpQtipStep >= guideCount) {
            $('[qtip-modal-btn="next"]').remove();
          }


         $('[help-qtip-btn]').attr('help-qtip-btn', (parseInt(helpQtipStep)+1));
         
         $('[qtip-modal-btn="dismiss"').click(function(){
          $('[help-qtip-btn]').attr('help-qtip-btn','0');
          $('[qtip-modal-btn="next"]').show();
          $('.qtip-modal').remove();
          qtipNext();
          qtip();
         })
        };

        
});
