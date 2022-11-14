# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # include ActionController::Cookies
  # include ActionController::RequestForgeryProtection
  protect_from_forgery with: :exception

  before_action :set_csrf_cookie
  after_action :add_header
  skip_before_action :verify_authenticity_token

  private

  def set_current_user
    @current_user = User.find(session[:user_id]) if session[:user_id]
  end

  def set_csrf_cookie
    cookies['CSRF-TOKEN'] = {
      value: form_authenticity_token,
      domain: :all
    }
  end

  def add_header
    response.header['Access-Control-Allow-Credentials'] = true
  end
end
