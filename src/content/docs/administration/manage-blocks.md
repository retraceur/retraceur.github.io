---
title: Manage blocks
description: This guide is explaining how to install, activate, update, deactivate and delete Retraceur Blocks.
sidebar:
    order: 4
---

Although Blocks are packaged like Plugins, Retraceur chose to separate their administration from the Plugins one. Please note, all installed blocks will be saved as subdirectories of the `/wp-content/plugins` directory and are managed just like plugins during the Retraceur loading process. Having a specific administration area just helps you directly and clearly figure out where you can manage the blocks you'll manipulate from the Site Editor or the Content Editor.

## Installing or updating a block

Once you downloaded the block's ZIP package you want to install or upgrade, you need to visit the Blocks Management area. To do so: simply click on the "Blocks" menu of your main Administration menu.

![Blocks Management](../../../assets/images/manage-blocks-us-001.png)

Once there, you can either click on the "Add New Block" submenu inside your main Administration menu or click on the button immediately located at the right of the Administration page title and having the same text than the Blocks submenu of your main Administration menu.

![Add New Blocks](../../../assets/images/manage-blocks-us-002.png)

As Retraceur does not provide yet a remote Blocks directory, you can only manually add a block's ZIP package you've found on the Internet (eg: [GitHub.com](https://github.com/topics/retraceur-block)). To manually add a block's ZIP package, start by clicking on the "Upload Block" button which is located immediately at the right of the Administration page title.

![Upload a Block](../../../assets/images/manage-blocks-us-003.png)

Use the button to browse your computer folders to find and select the block's ZIP package you downloaded from the Internet. Once done, click on the "Install" button to confirm the upload and create a new directory for you block inside the `/wp-content/plugins` parent directory of your Website.

![Update the Block](../../../assets/images/manage-blocks-us-004.png)

This step is only happening if you're upgrading or downgrading a pre-existing block. Check the displayed information and specifically the "Version" field to make sure you're doing what you intend to do. If that's the case, click on the "Replace current with uploaded" button otherwise click on the "Cancel and go back" one. If you chose to proceed, a screen will inform you about the installation/update status. Once complete, you'll find your block inside the list displayed into the "Installed Blocks" administration page.