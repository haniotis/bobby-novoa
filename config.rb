activate :autoprefixer
activate :relative_assets
set :relative_links, true
activate :directory_indexes

require "lib/image_helpers"
helpers ImageHelpers

set :css_dir, 'styles'
set :js_dir, 'scripts'
set :images_dir, 'images'

activate :external_pipeline,
  name: :webpack,
  command: build? ? "./node_modules/webpack/bin/webpack.js --bail -p" : "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
  source: ".tmp/dist",
  latency: 1

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end