/*页面载入完成后，创建复制按钮*/
// !function (e, t, a) {
	/* code */
	// var initCopyCode = function(){
	//   var copyHtml = '';
	//   copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
	// //   copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
	//   copyHtml += '  <i class="fa fa-copy" aria-hidden="true"></i>';
	//   copyHtml += '</button>';
	//   $(".highlight").wrap($('<div class="highlight-wrap"></div>'));
	//   $('.highlight-wrap').prepend(copyHtml);
	//   var clipboard = new ClipboardJS('.btn-copy', {
	// 	  target: function(trigger) {
	// 		  return trigger.nextElementSibling;
	// 	  }
	//   });
	//   // 成功提示
	//   clipboard.on('success', function(e) {
	// 	// toastPlug('复制成功!', 2000)
	//   });
	// }
	// initCopyCode();

	
    $('.highlight').each(function (i, e) {
		var $wrap = $('<div>').addClass('highlight-wrap')
		$(e).after($wrap)

		var copyHtml = '';
		copyHtml += '<button class="btn-copy" data-clipboard-snippet=""';
	  //   copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
		  if ($(e).children('figcaption').length > 0)
		    // 如果代码有文件名的那一行, 原来top是7px, 会和文件名这一行重合, 所以要复制按钮往下移一点
			copyHtml += ' style="top: 34px"';
		copyHtml += '>';
		copyHtml += '  <i class="fa fa-copy" aria-hidden="true"></i>';
		copyHtml += '</button>';
		// $wrap.append($('<button>').addClass('btn-copy').append('复制').on('click', function (e) {
		$wrap.append($(copyHtml).on('click', function (e) {
			var code = $(this).parent().find('.code').find('.line').map(function (i, e) {
				return $(e).text();
			}).toArray().join('\n');
			var ta = document.createElement('textarea');
			document.body.appendChild(ta);
			ta.style.position = 'absolute';
			ta.style.top = '0px';
			ta.style.left = '0px';
			ta.value = code;
			ta.select();
			ta.focus();
			var result = document.execCommand('copy');
			document.body.removeChild(ta);

		   	// 点击了之后则复制按钮显示 "√"图标, 800毫秒后恢复原样
			if(result) {
				var $b = $wrap.find('.btn-copy')
				// $(this).text('√');
				// $(this).text('✓');
				// $(this).text('✅');
				// $(this).text('✔');
				$b.find('i.fa-copy').remove();
				$b.append($('<i class="fa fa-check" aria-hidden="true"></i>'));
				// $b.append($('<i class="fa fa-check-circle" aria-hidden="true"></i>'));
				// $b.append($('<i class="fa fa-check-circle-o" aria-hidden="true"></i>'));
				// $b.append($('<i class="fa fa-check-square" aria-hidden="true"></i>'));
				// $b.append($('<i class="fa fa-check-square-o" aria-hidden="true"></i>'));
				setTimeout(function () {
					// var $b = $wrap.find('.btn-copy')
					// $b.text('');
					$b.find('i.fa-check').remove();
					// $b.find('i.fa-check-circle').remove();
					// $b.find('i.fa-check-circle-o').remove();
					// $b.find('i.fa-check-square').remove();
					// $b.find('i.fa-check-square-o').remove();
					$b.append($('<i class="fa fa-copy" aria-hidden="true"></i>'));
				  }, 800);
			}
			// else $(this).text('复制失败')
		  
		  	$(this).blur();
		}))
		// .on('mouseleave', function (e) {
		//   var $b = $(this).find('.btn-copy')
		//   setTimeout(function () {
			// 	$b.text('');
			// 	$b.append($('<i class="fa fa-copy" aria-hidden="true"></i>'));
		//   }, 300)
		// })
		.append(e);
	});
//   }(window, document);
  