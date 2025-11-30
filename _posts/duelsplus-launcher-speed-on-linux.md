---
title: "how i cut duels+ launcher startup time on linux from >10s to ~4s"
date: "2025-11-30"
---

so the duels+ launcher on linux was taking **over 10 seconds** to start when built. starting it unpackaged, however, wasn't bad at all. the main window launched within a few seconds, which is what made this issue so frustrating. everything worked fine until i packaged it and tried to run it as an end user.

at first i thought maybe the issue was that `main.js` was loading too many modules at startup. but nope. it never took more than five seconds to launch in the dev environment (that was the same exact codebase). the slowness only happened once i packaged it, and that clue was huge because it told me the problem wasn't my spaghetti code or async.

so i started digging into the tooling we use. the launcher is built with **electron**, and we package it using **electron forge**. for linux builds, we distribute appimages built with [`@reforged/maker-appimage`](https://www.npmjs.com/package/@reforged/maker-appimage) which is super convenient - however, the default compressor the maker uses when packaging (i believe it's either `xz` or `gzip`) doesn't decompress quickly enough, hence the slow startup.

i did a bit of research on appimages, how they work, and the maker we use, and turns out that the **zstd** compressor would work much better. 

so i tried it. i updated `forge.config.js` to use **zstd** as a compressor, but it kept failing to build the appimage and returned a `mksquashfs` error. i [reported this issue to the package developer](https://github.com/SpacingBat3/ReForged/issues/23), and turns out that the issue was in the maker itself. specifically, it was passing arguments for the `xz` compressor no matter the compressor you chose, and that resulted in `mksquashfs` returning an error and exiting.

![mksquashfs error in terminal](/posts/mksquashfs-error.png)

since the developer did not fix the issue on time, i forked the maker codebase, patched the issue, and published a fork on [npm](https://www.npmjs.com/package/@duelsplus/maker-appimage) and [github](https://github.com/duelsplus/maker-appimage). then, i replaced the `@reforged/maker-appimage` package with `@duelsplus/maker-appimage`.

the difference was immediate: startup dropped from **>10 seconds** to **4-5 seconds**. just like that, the launcher felt faster. afterwards, i built `v2.6.0` which now has improved startup times for linux :_)

note that the developer has also released a hotfix, so you can just tweak your `forge.config.js` to set the compressor for `@reforged/maker-appimage` to **zstd**. or if you prefer my fork, you can install `@duelsplus/maker-appimage`- i will continue to maintain it.
