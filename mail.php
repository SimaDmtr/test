<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

   if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
   if (isset($_POST['phone_type'])) {$phone = $_POST['qn8'];}
   if (isset($_POST['Данные1'])) {$Данные1 = $_POST['qn1'];}
   if (isset($_POST['Данные2'])) {$Данные2 = $_POST['qn2'];}
   if (isset($_POST['Данные3'])) {$Данные3 = $_POST['qn3'];}
   if (isset($_POST['Данные4'])) {$Данные4 = $_POST['qn4'];}
   if (isset($_POST['Данные5'])) {$Данные5 = $_POST['qn5'];}
   if (isset($_POST['Данные6'])) {$Данные6 = $_POST['qn6'];}
   if (isset($_POST['Подарок'])) {$Подарок = $_POST['qn7'];}
    $to = "frankie64ify@gmail.com"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "Заявка с квиза Spa-Бассейны";
    $message = "Результаты тестирования:\n
        Телефон: $phone \n
        Выслать результат: $phone_type \n
        Шаг 1. $Данные1 \n
        Шаг 2. $Данные2 \n
        Шаг 3. $Данные3 \n
        Шаг 4. $Данные4 \n
        Шаг 5. $Данные5 \n
        Шаг 6. $Данные6 \n
        Шаг 7. $Данные7 \n
        Шаг 8. Выберите бонус: $Подарок";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<div>Спасибо за отправку вашего сообщения!</div>";
}
else
{
echo "<center><b>Ошибка. Сообщение не отправлено!</b></center>";
}
} else {
http_response_code(403);
echo "Попробуйте еще раз";
}
?>
<!-- info@paradigma.by   -->
