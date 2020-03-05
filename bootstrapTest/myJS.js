/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('.dropdown-menu').on('click', function(e) {
	var $target = $(e.target);
	$target.is('li') && $('#text').text($target.text())
})

