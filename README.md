# jpana

There are many "flashcard" web applications for memorizing Hirigana (and eventually Katakana). This one is mine.

## Motivation

This application was inspired by Phil Gyford's [Hirigana and Katakana quiz](https://www.gyford.com/japanese/) which is very good. I wanted something like that but with a few differences:

* I did not want a progress or score counter
* I wanted a built-in lookup table, or chart, of characters
* I wanted a skip this character button
* I wanted an application that could work offline

So, that's what `jpana` does.

## Why is it called "jpana" ?

Mostly because I didn't spend much time thinking about a name. Both hirigana and katakana end in "ana" and "jp" is the abbreviation for Japan, so "jp" + "ana" = "jpana". Also, it's a mis-spelling of "japan" but that was just a coincidence.

## Demo

https://aaronland.github.io/jpana/

Notes:

* This has been tested on desktop Firefox and Safari and iOS.
* Offline support (service workers) for the demo application is not enabled at this time (see comments below).

## Screenshots

### Basic layout

![](docs/images/jpana-character.png)

The basic layout consists of a single Hirigana character rendered in a large font size. Underneath the character is an input field to enter in the English phoneme corresponding to that character followed by a submit button. To the right of the submit button is a "list" icon which will open a modal dialog listing all the Hirigana characters and their English phonemes.

In the bottom right-hand corner of the page is a "refresh" icon which will load a new Hirigana character. If the "refresh" icon is double-click a confirmation window will be opened that, if agreed to, will purge any offline cache data for the application.

### A correct translation (mobile)

<img src="docs/images/jpana-ha.png" height="480" style="border:solid thin;" />

When you correctly enter an English phoneme for a Hirigana character feedback will be displayed under the character. After 5 seconds it will disappear.

A new character to translate will appear.

### An incorrect translation (mobile)

<img src="docs/images/jpana-ze-zo.png" height="480" style="border:solid thin;" />

When you enter an incorrect English phoneme for a Hirigana character feedback will be displayed under the character. If you get tired of trying to translate it you can consult the chart of all the Hirigana characters by clicking the "list" icon to the right of the translate button or by clicking the "refresh" button, at the bottom-right of the page, to load a new character.

### The lookup chart of all Hirigana characters and their English phonemes

![](docs/images/jpana-chart.png)

When you click the "list" icon to the right of the translate button a modal dialog will appear listing all the Hirigana characters and their English phonemes.

### Purging offline caches

![](docs/images/jpana-cache.png)

If you double-click the "refresh" button, at the bottom-right of the page, you will be prompted to confirm that you want to purge any application cache files stored on your device. See the "Offline support" section below for details.

### Offline support

The application is designed to work offline for devices that support the [Service Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). This works but should probably still be considered unstable. Support, or at least documentation, for Service Workers across platforms is inconsistent and they appear to be causing problems with the local caching functionality.

Offline support is disabled by default. To enable offline support adjust the `data-offline-scope` attribute of the `body` in the `index.html` to be the value of [the scope used to register the Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#registering_your_worker).

The interaction between an application's [Service Worker definition file](www/sw.js) and the browser's application cache (that caches the files defined by the Service Worker) remains a bit of a mystery to me. [Specifically, changing the Service Worker's cache key does not always invalidate existing caches.](https://stackoverflow.com/questions/41636754/how-to-clear-a-service-worker-cache-in-firefox/41675764#41675764) This can make updating an instance of the `jpana` application that has enabled offline support challenging where "challenging" means that changes aren't reflected and the only way to deal with the problem is to remove all the application data for the entire domain (hosting the `jpana` application).

Purging the application will trigger a confirmation dialog. If you are purging the application cache will offline you will be presented with a second confirmation dialog to ensure that's what you really want to do. Purging the application cache while you are offline will effectively disable offline support for the `jpana` and the application won't work again until you are online again and can fetch the application files from source.

_Note: Because offline support depends on Service Workers it will not be available if a device is running under Mac OS or iOS [with Lockdown mode enabled](https://webkit.org/blog/13966/webkit-features-in-safari-16-4/)._

## See also

* https://www.gyford.com/japanese/
