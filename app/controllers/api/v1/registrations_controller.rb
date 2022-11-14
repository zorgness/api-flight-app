# frozen_string_literal: true

module Api
  module V1
    class RegistrationsController < ApplicationController
      # include RackSessionFix
      include CurrentUserConcern

      def create
        user = User.create!(
          email: params['user']['email'],
          password: params['user']['password'],
          password_confirmation: params['user']['password_confirmation']
        )

        if user
          session[:user_id] = user.id
          response.set_header('Access-Control-Allow-Credentials', true)
          render json: {
            status: :created,
            user: user
          }
        else
          render json: { status: 500 }
        end
      end
    end
  end
end
