Nyauth.configure do |config|
  config.encryption_secret = ENV['NYAUTH_ENCRYPTION_SECRET']
  config.confirmation_expire_limit = 1.hour
  config.reset_password_expire_limit = 1.hour
  config.mail_delivery_method = :deliver_now
  config.use_cookie_auth = false
  config.redirect_path do |urls|
    config.redirect_path_after_sign_in = -> (client_name) { urls.root_path }
  end
end
