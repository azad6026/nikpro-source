---
id: 31738
title: Git Version Control; A simple introduction
date: 2018-06-27T21:24:58+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31738
permalink: /git-version-control-a-simple-introduction/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/git-version-control-system.jpg
categories:
  - Git
tags:
  - git clone
  - git init
  - git push
  - git remote
  - version control
---
By far, the most widely used version control system is Git. Rather than having one single place for the full version history of the software, every developer&#8217;s copy of the code contains the full history of changes. In addition to being distributed, Git has been designed with performance, security and flexibility in mind.

## Setup a repository

After <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank" rel="noopener noreferrer">installing git</a>, you need to setup your repository to have a virtual space for your project We assume that we have a project already and we need to version it with a new git repository:

**`<pre>cd /path/to/your/existing/code 

git init
```
`**

We could also point initialisation directly to the project:

**`git init <project directory>`**

now the repository has been initialised.

## Cloning an existing repository: git clone {.}

To obtain a local development clone of an existing central repository, we could use clone and maintain it in our local copy by this code:

**`git clone <repo url>`**

You pass `git clone` a repository URL. We will be using the Git SSH protocol. Git SSH URLs follow a template of: `git@HOSTNAME:USERNAME/REPONAME.git.`

This is an example: git@bitbucket.org:rhyolight/javascript-data-store.git.

## Saving changes to the repository: git add and git commit {.}

You can commit file version changes to your local copy or new initialised repository.After executing this example, your repo will now have `CommitTest.txt` added to the history and will track future updates to the file.

**`cd /path/to/project`** 

**`echo "test content for git tutorial" >> CommitTest.txt`** 

**`git add CommitTest.txt`** 

**`git commit -m "added CommitTest.txt to the repo"`**

The code introduced add and commit as git commands. Another common use case for `git add` is the `--all` option. which will take any changed and untracked files in the repo and add them to the repo and update the repo&#8217;s working tree.

## Repo-to-repo collaboration: git push {.}

Unlike SVN&#8217;s collaboration that depends on the relationship of the central repository and the working copy, Git’s collaboration model is based on repository-to-repository interaction. Instead of checking a working copy into SVN’s central repository, you push or pull commits from one repository to another.

Cloned repositories as they are a local copy of remote repositories are already configured for remote collaboration. So you just need to `git push ` your changes to the remote repository.

For a new initialised local repository, you will need o configure it for remote collaboration. In your hosted git service( like github), create a repository and use its url as the remote repo of your local copy repo.

## Configuration & set up: git config {.}

Once you have a remote repo setup, you will need to add a remote repo url to your local `git config`, and set an upstream branch for your local branches.

<pre>git remote add <remote_name> <remote_repo_url>
```


This command will map remote repository at `<remote_repo_url>`to a ref in your local repo under `<remote_name>`. 

Now you can push local branches to your remote repository:

**`git push -u <remote_name> <local_branch_name>`**

This command will push the local repo branch under `<local_branc_name>` to the remote repo at `<remote_name>`.

## Default custom setting

The first thing you’ll want to do after installing Git is tell it your name/email and customise some of the default settings.

**`git --global user.name "John Smith" git config --global user.email john@example.com`**

You could also setup your favourite editor and a few <a href="https://www.atlassian.com/git/tutorials/why-git" target="_blank" rel="noopener noreferrer">other settings</a> as you wish.