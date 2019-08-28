
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.0

### Added

- This file.
- All lesson branches converted to monorepo
- Yarn workspaces
- `prettier#1.16`
- README

### Changed

- Update `gulp#3.9.1->4.0.0`.
- Update `gulp-postcss#7.0.0->8.0.0`.
- Update `tailwindcss#0.1.3->0.7.4`.
- Replace `["..."]` task syntax with `gulp.series("...")` syntax

### Removed

- All lesson branches.

## 1.1.0 - 2019-07-25

### Added

- Lesson 09 was missing code in `src/styles.css` and `tailwind.js`. Added in the code for the lesson. 

### Changed

- Update `gulp#4.0.0->4.0.2`.
- Update `tailwindcss#0.7.4->1.0.5`.
- Fixed lesson 9 code to work as intended, as it was matching a previous lesson (lesson 3, I believe).
- Changed `@tailwind preflight;` to `@tailwind base;` in `/src/styles.css` on all lessons.
- Changed the title on `index.html` on lesson 05 to match lesson name.

- Heavily changed `tailwind.js` file for all lessons due to tailwindcss 1.0.0 update. Changes referenced on the official changelog following the update guide.

### Removed

- Removed `\img\image1.jpg` from lesson 5 -> 8 as they were not used in them.
