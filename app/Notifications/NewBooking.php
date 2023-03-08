<?php

namespace App\Notifications;

use App\Models\Booking;
use App\Models\Travel;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;
class NewBooking extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(public Booking $booking)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $user = User::find($this->booking->user_id);
        $travel = Travel::find($this->booking->travel_id);
        return (new MailMessage)
            ->subject("New Booking from MoviFP ")
            ->greeting("New Booking: {$user->name}")
            ->line(Str::limit("Here, you have the information about your trip", 50))
            ->line(Str::limit("From $travel->origin to $travel->destination", 50))
            ->line(Str::limit("On $travel->date at $travel->dtime", 50))
            ->action('Go to MoviFP to see the details', url("/travel/show/{$travel->id}"))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
