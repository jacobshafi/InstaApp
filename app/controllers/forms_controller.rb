class FormsController < ApplicationController
  def contact
    ContactMailer.contact_notification(params).deliver_now
    if request.xhr?
      render nothing: true
    else
      redirect '/'
    end
  end
end
