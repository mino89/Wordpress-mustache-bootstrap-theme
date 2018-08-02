<?php

require 'mustache/src/Mustache/Autoloader.php';
Mustache_Autoloader::register();

return new Mustache_Engine(array(
   'loader' => new Mustache_Loader_FilesystemLoader(get_template_directory() . '/views')
));

?>
