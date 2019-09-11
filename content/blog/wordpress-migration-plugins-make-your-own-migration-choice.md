---
id: 31629
title: WordPress Migration Plugins; Make your own migration choice
date: 2018-06-09T21:24:26+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31629
permalink: /wordpress-migration-plugins-make-your-own-migration-choice/
image: ../../static/images/migration-wp.jpg
categories:
  - WORDPRESS
tags:
  - plugins
---
There are lots of plugins developed for a WordPress [site](_wp_link_placeholder) migration purpose. You will need a good way and the right choice to be able to migrate or duplicate one site to another and finding the best one that suits your need is hard. All these plugins are pretty much the same but they vary in options and flexibility they come with and of course their price.

I will share a few of them that I have played around with and used for [my most recent project](http://www.nikpro.com.au/wordpress-difficulties-and-challenges-how-to-face-wordpress-problems/) so that you get the idea:

### [All in one migration](https://wordpress.org/plugins/all-in-one-wp-migration/)

This is absolutely by far my most favourite one. It dose everything by one click. It could export and import the whole site and share it into your dropbox or amazon or ftp or other sharing hosts or you can simply download the file and then import it into your new site. And you just need to change a few things to have a duplicate site. It supports almost all hosting and has no dependencies. And for a site up to 512MB in size it is completely free.

For mu=y project I couldn&#8217;t use the free version as my site was a large one with over 1.2GB in size but this is my first choice at all times.

### [BackupBuddy](http://ithemes.com/purchase/backupbuddy/)

This plugin isn’t free. Prices start at $80 for two sites. But it does a great job.All you need to do is follow the on-screen prompts and the provided ImportBuddy script will take care of migrating URLs and file paths in posts, settings and configuration files.I haven&#8217;t used this one but it looks reliable.

### [UpdraftPlus](https://updraftplus.com/)

I really like this one. It might be slow but it is fully optional. UpdraftPlus lets you to clone a website entirely at a different location, all from your WordPress dashboard.

You can easily import backups made elsewhere, allowing you to quickly migrate a site to a different install. You’ll need to upgrade to the premium version of this plugin for a migration addon and Multisite compatibility. Prices start at $60 for two licences.

### Do it Manually

But the best and most reliable way I could share with you is if you do it yourself and rely on your skills and migrate the site manually. Of course you need to be careful but in this case you will not loose any data in the host site if you just want to clone a site to another. In some of the plugins that I didn&#8217;t mention, they only let you to move a site and not just copy it.

So [this](https://css-tricks.com/moving-a-wordpress-site/) is the best article I have followed for my case and was awesome.

First you make a backup of your database which you could use a plugin or command line.Then backup your files which are in &#8220;wp-content&#8221; folder of your host site and download the folder.Then import the database to the new server database (perhaps you need to change the url in home and site section in options table)  and then replace the we-content of the new server with the one you downloaded before. Then just check everything step by step and all will be good. Even if you fail you can redo and check what went wrong last time as you now what you have done and it is fully in your control.I used this version for my large project and after a few tweaks it was fine. Enjoy migrating/ cloning your sites.