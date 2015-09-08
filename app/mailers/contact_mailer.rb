class ContactMailer < ActionMailer::Base
  default from: "apieceofhair@gmail.com"

  def contact_notification(form)
    @name = form[:name]
    @phone = form[:phone]
    @email = form[:email]
    @message = form[:message]
    mail(:to => 'amins.shahab@gmail.com', :subject => "You have received a contact request")
  end
end
