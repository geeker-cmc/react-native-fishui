const {
  watch, src, dest, task,
} = require('gulp');

const watcher = watch('../components/**/*');

function copy() {
  return src('../components/**/*')
    .pipe(dest('./src/dist-components/'));
}

task('copy', () => copy());

task('default', () => {
  copy();
  watcher.on('all', () => {
    copy();
  });
});
