# Daily Comics
**This is my personal fork of the [SailfishOS][sfos] app [Daily Comics][dc].**

This fork adds a few comics/features on top of the current version.
Each feature is kept in its own feature branch and all features are
collected in the single `integrate` branch.

## Changes
### Additional/fixed comics

- ccassandra
- gegendenstrich
- isfies
- nedroid
- sigmund
- totaberlustig

### Features

1. **branch: regex-plugins**: New plugin format using only regular
   expressions. This is sufficient for most plugins and allows
   (relatively) safe automatic updates.
   
   The original version downloads a (usually empty/small) file from
   the repository that contains updates to existing plugins. This
   allows to fix broken plugins without releasing/installing a new
   version of the app. However, this file may contain (due to how
   general plugins work) arbitrary JavaScript code to be executed on
   the device of the user. These scripts can easily read or write all
   files that are accessible by the user running the app. Hence,
   everyone controlling the update file can gain access to the users
   data.
   
   Because I (personally) consider this a security risk, the update
   file is no longer allowed to contain JavaScript code. Instead, only
   plugins based on the new regular expressions format can be updated
   automatically.
   
2. **branch: permissions**: Install SailJail rules restricting
   access rights of the app.

   The original version has (currently) no SailJail rules, hence can
   access all files on the user's device that the user may access
   (also see item 1. above). This change restricts the rights of the
   app to access the network (naturally) and the pictures directory.
   
3. **branch: share**: Fixes the broken "share" button in the app

## Download

The app is *not* available from an app-store. However, precompiled packages can be downloaded from [SailfishOS OBS][obs]:

 - [aarch64][aarch64]
 - [armv7hl][armv7hl]
 - [i486][i486]

[sfos]: https://sailfishos.org
[dc]: https://github.com/sailfishos-applications/daily-comics

[aarch64]: https://build.sailfishos.org/package/binaries/home:fifr/daily-comics?repository=sailfish_latest_aarch64
[armv7hl]: https://build.sailfishos.org/package/binaries/home:fifr/daily-comics?repository=sailfish_latest_armv7hl
[i486]: https://build.sailfishos.org/package/binaries/home:fifr/daily-comics?repository=sailfish_latest_i486
