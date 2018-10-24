<?php
namespace TYPO3\SiteGoldner\UserFunc;
/*
 * Fit4Net Def-Functions für TS
 *
 * Dr. André Dölling - Fit4Net GbR
 * 04.08.2011
 */


class user_F4NDefault {
var $cObj;// The backReference to the mother cObj object set at call time

/**
* Call it from a USER cObject with 'userFunc = user_randomImage->main_randomImage'
*/

 function GetOptionTags($content,$conf){

  $i = 1;
  while ($i <= $conf['maxValue']) {
  	$content .= '<option value="'.$i.'">'.$i.'</option>';
  	$i++;
  }

 return $content;
 }

}

?>
