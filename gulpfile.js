const gulp = require("gulp"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    minifyCss = require("gulp-minify-css"),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    browserSync = require("browser-sync").create(),
    paths = require("./paths.json"),
    data = require("./data"),
    nunjucks = require("gulp-nunjucks");

gulp.task("watch", ["compile"], () => {
    const reload = browserSync.reload;

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("sass/**/*.scss", ["stylesheets"]);
    gulp.watch("./templates/**/*.html",["templates", reload]);
    gulp.watch("js/*.js",["scripts:watch"]);
    gulp.watch("pages/*.html").on("change", reload);
});

gulp.task("sass", () => (
    gulp.src(paths.source.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.dest.styles))
        .pipe(browserSync.stream())
));

gulp.task("fonts", () => (
    gulp.src(paths.source.fonts)
        .pipe(gulp.dest(paths.dest.fonts))
));

gulp.task("images", () => (
    gulp.src(paths.source.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.dest.images))
));

gulp.task("scripts", () => (
    gulp.src(paths.source.scripts)
        .pipe(concat("admin.js"))
        .pipe(gulp.dest(paths.dest.scripts))
));

gulp.task("stylesheets",["sass"], () => (
    gulp.src(paths.source.stylesheets)
        .pipe(concat("style.css"))
        .pipe(gulp.dest(paths.dest.styles))
));

gulp.task("stylesheets:uglify",["stylesheets"], () => (
    gulp.src(paths.dest.styles + "/style.css")
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest.styles))
));

gulp.task("styles:watch",["styles"],browserSync.reload);

gulp.task("scripts:watch",["scripts"],browserSync.reload);

gulp.task("scripts:uglify",["scripts"], () => (
    gulp.src(paths.dest.scripts + "/admin.js")
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest.scripts))
));

gulp.task("templates", () => {

    const templates = paths.source.templates;

    return gulp.src(templates.src)
		       .pipe(nunjucks.compile(data))
		       .pipe(gulp.dest(templates.dest));
});

gulp.task("compile",["templates", "fonts","images","scripts", "stylesheets"]);

gulp.task("compile:dist",["templates", "fonts","images","scripts:uglify", "stylesheets:uglify"]);
