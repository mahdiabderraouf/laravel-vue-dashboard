@component('mail::message')
# Introduction

Hi {{ $fullName }}, Here are the credentials of your account :
<br>
@component('mail::panel')
Email : {{ $email }}
<br>
Password : {{ $password }}
@endcomponent

@component('mail::button', ['url' => url('/login') ])
Se connecter
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent