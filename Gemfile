source 'https://rubygems.org'
ruby '2.7.0'

gem 'rails', '5.2.4.1'
gem 'pg'
gem 'uglifier'
gem 'jquery-rails'
gem 'turbolinks'
gem 'octokit', git: 'https://github.com/octokit/octokit.rb'
gem 'bootstrap-sass'
gem 'bootswatch-rails'
gem 'rest-client'
gem 'omniauth'
gem 'omniauth-github'
gem 'will_paginate'
gem 'will_paginate-bootstrap'
gem 'faraday-http-cache'
gem 'github-markup', require: 'github/markup'
gem 'redcarpet'
gem 'pg_search'
gem 'sassc-rails'
gem 'sprockets'
gem 'jsonapi-resources'
gem 'schema_plus_indexes'

group :development do
  gem 'web-console'
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :development, :test do
  gem 'rspec-rails', '4.0.0.beta4' # 10/18/2019: LOCKED DOWN
  gem 'factory_bot_rails'
  gem 'database_cleaner'
  gem 'faker'
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-bundler'
  gem 'guard-migrate'
  gem 'dotenv-rails'
  gem 'rails-controller-testing'
end

group :production do
  gem 'foreman'
  gem 'puma'
  gem 'rails_12factor'
  gem 'rack-google-analytics'
  gem 'bugsnag'
  gem 'newrelic_rpm'
end

group :test do
  gem 'vcr'
  gem 'webmock'
  gem 'simplecov', require: false
  gem 'codeclimate-test-reporter', require: false
end
