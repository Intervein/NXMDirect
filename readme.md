If you enjoy this project please consider: https://ko-fi.com/intervein

# Nexus Direct to Download Manager (NXM Direct)

A lightweight browser extension designed to standardize the download experience on Nexus Mods. This utility ensures that even files designated as "Manual Only" can be sent directly to your configured Mod Manager (such as Mod Organizer 2 or Vortex) with a single click.  This is mainly to supply proper metadata for mod manager usage and does not supply a "free", "fast" or "premium" download service.  This small tool will provide some essential data for modlist makers, maintainers and enthusiasts. 

## Features

Standardized Interface: Injects a "NXM Direct" button into file entries that traditionally only offer manual downloads.
Context Awareness: The tool only activates on sections of the page where a manager link is missing, preventing UI clutter on supported files.
Status Feedback: Provides clear visual feedback during the link hand-off process to the local system handler.

## Installation

To install this extension for personal use, follow the instructions for your specific browser:

### Addons or extensions in Firefox and Chrome-based browsers
Simply install through the web store or extension store for your browser.  Only the latest Chrome and Firefox have been tested and used.
If it is not available in your store you may need to manually install with the provided code or wait for an update to be pushed.

### Manual install options ###

### Firefox
1. Download this repository as a ZIP file and extract the contents.
2. Navigate to `about:debugging` in the address bar.
3. Select **This Firefox** from the sidebar.
4. Click **Load Temporary Add-on...** and select the `manifest.json` file.

### Chrome / Edge / Brave
1. Download this repository as a ZIP file and extract the contents.
2. Navigate to `chrome://extensions`.
3. Enable **Developer Mode** using the toggle in the top-right corner.
4. Click **Load unpacked** and select the root folder of the extension.

## Technical Overview

The extension identifies download links within the Nexus Mods DOM and appends a modified link utilizing the `nxm://` protocol. By forcing this protocol on manual links, the browser can pass the file metadata directly to any local application registered to handle NXM links.

## License and Legal

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)**.

Personal Use: Users are free to use and share this tool for personal modding purposes.  No warranty is provided.
No Derivatives: Distribution of modified versions of this source code is prohibited.
Non-Commercial: This utility may not be used for commercial purposes or financial gain.

Disclaimer: Nexus Mods Direct to Download Manager is an independent development and is not affiliated with, authorized, or endorsed by Nexus Mods or Black Tree Gaming Ltd.

